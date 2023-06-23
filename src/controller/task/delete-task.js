const { TaskModel } = require('../../model/task-model');

/**
 * Cria nutricionista e retorna a nutricionista
 */
class DeleteTask {
    async delete(request, response) {
        try {
            const { userId } = request;
            const { id } = request.params;
            

            const task = await TaskModel.destroy({
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

module.exports = new DeleteTask();
