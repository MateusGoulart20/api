const { Model , DataTypes } = require('sequelize');
class ProdutoModel extends Model {
    static init(database){
        super.init({
            descricao: DataTypes.TEXT,
            preco: DataTypes.FLOAT,
            marca: DataTypes.TEXT,
            vencimento: DataTypes.DATE,
            tipo: DataTypes.TEXT,
        },{
            modelName: 'Produto',
            tableName: 'produto',
            timestamps: false,
            sequelize: database,
        });
    }
    static associate(models) {
        this.belongsToMany(models.Venda, { foreignKey: 'id', through: models.VendaProduto });
    }
}
module.exports = new ProdutoModel();