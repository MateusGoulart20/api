const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { UserModel } = require('../../model/user-model');

/**
 * Entra com o usuário e retorna um token de acesso
 */
class Signin {
    async sigin(request, response) {
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

            // Verifica se a senha está correta
            const isPasswordValid = await bcrypt.compare(password, userExists.password);

            if (!isPasswordValid) {
                return response.status(400).json({
                    error: 'Senha incorreta!'
                });
            }

            // Gera e retorna o access token
            const accessToken = jwt.sign(
                { id: userExists.id },
                process.env.TOKEN_SECRET,
                { expiresIn: '30m' }
            );

            return response.status(200).json({ accessToken });
        } catch (error) {
            return response.status(500).json({
                error: `Erro interno: ${error}`
            });
        }
    }
}

module.exports = new Signin();
