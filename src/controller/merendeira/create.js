const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { MerendeiraModel } = require('../../model/merendeira-model');

/**
 * Criar usuário e retorna um token de acesso
 */
class Create {
    async create(request, response) {
        try {
            const { nome } = request.body;

            // Validar parâmetros
            if (!nome) return response.status(400).json({ error: 'Nome é obrigatório!' });

            const existe = await MerendeiraModel.findOne({
                where: {
                    nome,
                }
            });
            if (existe) return response.status(400).json({ error: 'Merendeira já existe!' });

            // Cria usuário
            await MerendeiraModel.create({
                nome,
            });

            return response.status(201).json({ message: "sucess" });
        } catch (error) {
            return response.status(500).json({
                error: `Erro interno: ${error}`
            });
        }
    }
}
module.exports = new Create();
