const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { UserModel } = require('../../model/user-model');

/**
 * Entra com o usuário e retorna um token de acesso
 */
class Read {
    async read(request, response) {
        try {
            const { email, password } = request.body;

            // Validar parâmetros
            if (!email) {return response.status(400).json({error: 'Email é obrigatório!'});}
            if (!password) {return response.status(400).json({error: 'Senha é obrigatória!'});}
            
            // Verifica se usuário existe
            const userExists = await UserModel.findOne({
                where: { email } 
            });

            if (!userExists) {
                return response.status(400).json({
                    error: 'Usuario não existe!'
                });
            }

            return response.status(200).json({ accessToken });
        } catch (error) {
            return response.status(500).json({
                error: `Erro interno: ${error}`
            });
        }
    }
}

module.exports = new Read();
