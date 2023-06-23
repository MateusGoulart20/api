const { Model, DataTypes } = require("sequelize");

class UserModel extends Model {
    static init(database) {
        super.init({
            name: DataTypes.TEXT,
            password: DataTypes.TEXT,
            email: DataTypes.TEXT
        }, {
            tableName: 'user',
            modelName: 'User',
            timestamps: false,
            sequelize: database
        });
    }
    
    static associate(models) {
        this.hasMany(models.Task, { foreignKey: 'responsavel' });
    }
}

module.exports = { UserModel };
