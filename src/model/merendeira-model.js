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
    
}
module.exports = { MerendeiraModel };