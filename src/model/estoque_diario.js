const { Model, DataTypes } = require("sequelize");

class EstoqueDiarioModel extends Model {
    static init(database) {
        super.init({
            data: DataTypes.TEXT,
            qtddeitens: DataTypes.TEXT,
            merendeira: DataTypes.INTEGER
        }, {
            tableName: 'estoque_diario',
            modelName: 'EstoqueDiario',
            timestamps: false,
            sequelize: database
        });
    }
    static associate(models) {
        this.hasOne(models.Merendeira, { foreignKey: 'id' });
    }
}
module.exports = { EstoqueDiarioModel };