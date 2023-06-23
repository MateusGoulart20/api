const { TaskModel } = require('../../model/task-model');

/**
 * Cria nutricionista e retorna a nutricionista
 */
class ReadTask {
    async read(request, response) {
        try {
            const { userId } = request;

            let list = await TaskModel.findAll({ where: {responsavel: userId} });

            return response.status(201).json(list);
        } catch (error) {
            return response.status(500).json({
                error: `Erro interno: ${error}`
            });
        }
    }
}

module.exports = new ReadTask();
