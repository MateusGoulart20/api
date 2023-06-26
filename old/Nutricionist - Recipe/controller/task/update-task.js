const { TaskModel } = require('../../../Task/model/task-model');

/**
 * Cria nutricionista e retorna a nutricionista
 */
class UpdateTask {
    async update(request, response) {
        try {
            const { userId } = request;
            const { id } = request.params;
            const { descricao } = request.body;

            const task = await TaskModel.update({
                descricao
            },{
                where: {
                    responsavel: userId,
                    id
                }
            });

            return response.status(201).json({message: "sucess"});
        } catch (error) {
            return response.status(500).json({
                error: `Erro interno: ${error}`
            });
        }
    }
}

module.exports = new UpdateTask();
