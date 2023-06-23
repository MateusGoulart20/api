const { Model, DataTypes } = require("sequelize");

class TaskModel extends Model {
    static init(database) {
        super.init({
            descricao: DataTypes.TEXT,
            responsavel: DataTypes.INTEGER,
        }, {
            tableName: 'task',
            modelName: 'Task',
            timestamps: false,
            sequelize: database
        });
    }
    
    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'id' });
    }
}

module.exports = { TaskModel };
