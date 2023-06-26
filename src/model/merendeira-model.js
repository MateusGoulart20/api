const { Model, DataTypes } = require("sequelize");

class MerendeiraModel extends Model {
    static init(database) {
        super.init({
            nome: DataTypes.TEXT,
        }, {
            tableName: 'merendeira',
            modelName: 'Merendeira',
            timestamps: false,
            sequelize: database
        });
    }
    static associate(models) {
        this.belongsTo(models.EstoqueDiario, { foreignKey: 'id' });
    }
}
module.exports = { MerendeiraModel };