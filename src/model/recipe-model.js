const { Model, DataTypes } = require("sequelize");

class RecipeModel extends Model {
    static init(database) {
        super.init({
            nameRecipe: DataTypes.TEXT,
            ingredientsQuantity: DataTypes.INTEGER
        }, {
            tableName: 'recipe',
            modelName: 'Recipe',
            timestamps: false,
            sequelize: database
        });
    }

    static associate(models) {
        this.belongsTo(models.Nutritionist, { foreignKey: 'nutritionistId' });
    }
}

module.exports = { RecipeModel };
