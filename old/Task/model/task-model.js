const { Model, DataTypes } = require("sequelize");
class TaskModel extends Model {
    static init(database) {
        super.init({
            //Uma tarefa contém informações como título, descrição, data de vencimento e status (concluída ou pendente).
            responsavel: DataTypes.INTEGER,
            titulo: DataTypes.TEXT,
            descricao: DataTypes.TEXT,
            vencimento: DataTypes.DATE,
            status: DataTypes.TEXT,
            description: DataTypes.TEXT,
            finished: DataTypes.BOOLEAN,
        }, {
            modelName: 'Task',
            tableName: 'tasks',
            timestamps: false,
            sequelize: database
        });
    }

    static associate(models) {
        // Uma tarefa pertence a um usuário
        this.belongsTo(models.User, { foreignKey: 'userId' });
    }
}

module.exports = { TaskModel };
