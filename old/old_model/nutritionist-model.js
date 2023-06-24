const { Model, DataTypes } = require("sequelize");

class NutritionistModel extends Model {
    static init(database) {
        super.init({
            crn: DataTypes.TEXT,
            name: DataTypes.TEXT
        }, {
            tableName: 'nutritionist',
            modelName: 'Nutritionist',
            timestamps: false,
            sequelize: database
        });
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'userId' });
        this.hasMany(models.Recipe, { foreignKey: 'nutritionistId' });
    }
}

module.exports = { NutritionistModel };
