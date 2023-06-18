const { Model, DataTypes } = require('sequelize');
class TaskModel extends Model {
    static init(database) {
        super.init({
            //Uma tarefa contém informações como título, descrição, data de vencimento e status (concluída ou pendente).
            responavel: DataTypes.INTEGER,
            titulo: DataTypes.TEXT,
            descricao: DataTypes.TEXT,
            vencimento: DataTypes.DATE,
            status: DataTypes.TEXT,
        }, {
            modelName: 'Task',
            tableName: 'task',
            timestamps: false,
            sequelize: database
        });
    }
}
module.exports = { TaskModel };