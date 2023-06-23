const { TaskModel } = require('../../model/task-model');

/**
 * Cria nutricionista e retorna a nutricionista
 */
class CreateTask {
    async create(request, response) {
        try {
            const { userId } = request;
            const { descricao } = request.body;

            // Verifica descricao
            if (!descricao)
                return response.status(400).json({error: 'descricao é obrigatória!'});

            // Cria Nutricionista
            const task = await TaskModel.create({
                descricao,
                responsavel:userId
            });

            return response.status(201).json(task);
        } catch (error) {
            return response.status(500).json({
                error: `Erro interno: ${error}`
            });
        }
    }
}

module.exports = new CreateTask();
