const { Model, DataTypes } = require("sequelize");

class UserModel extends Model {
    static init(database) {
        super.init({
            name: DataTypes.TEXT,
            password: DataTypes.TEXT,
        }, {
            tableName: 'user',
            modelName: 'User',
            timestamps: false,
            sequelize: database
        });
    }
}
module.exports = { UserModel };
