const { Model, DataTypes } = require('sequelize');
class VendaModel extends Model {
    static init(database){
        super.init({
            data: DataTypes.DATE,
            numero: DataTypes.INTEGER,
            status: DataTypes.TEXT,
            responsavel: DataTypes.INTEGER,
        },{
            modelName: 'Venda',
            tableName: 'venda',
            timestamps: false,
            sequelize: database,
        })
    }

    static associate(models) {
        this.belongsToMany(models.Produto, { foreignKey: 'id', through: models.VendaProduto });
        this.hasOne(models.Funcionario, { foreignKey: 'id' });
    }
}
module.exports = { VendaModel };