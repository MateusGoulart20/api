const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { MerendeiraModel } = require('../../model/merendeira-model');

/**
 * Entra com o usuário e retorna um token de acesso
 */
class Delete {
    async delete(request, response) {
        try {
            const { nome } = request.body;
            // Validar parâmetros
            if (!nome) return response.status(400).json({ error: 'Nome é obrigatório!' });


            // Cria usuário
            const quantidade = await MerendeiraModel.destroy({
                where: {
                    nome,
                },
            });
            if (quantidade == 0) {
                return response.status(200).json({ message: "n encontrado" });
            }
            return response.status(200).json({ message: "sucess" });
        } catch (error) {
            return response.status(500).json({
                error: `Erro interno: ${error}`
            });
        }
    }
}

module.exports = new Delete();
