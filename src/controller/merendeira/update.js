const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { MerendeiraModel } = require('../../model/merendeira-model');

/**
 * Entra com o usuário e retorna um token de acesso
 */
class Update {
    async update(request, response) {
        try {
            const { id, nome } = request.body;
            // Validar parâmetros
            if (!nome) return response.status(400).json({ error: 'Nome é obrigatório!' });
            if (!id) return response.status(400).json({ error: 'Id é obrigatório!' });

            const merendeira = await MerendeiraModel.update({
                nome
            },{
                where: {
                    id,
                },
            });
            
            return response.status(200).json({ message: "sucess" });
        } catch (error) {
            return response.status(500).json({
                error: `Erro interno: ${error}`
            });
        }
    }
}

module.exports = new Update();
