const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { UserModel } = require('../../model/user-model');

/**
 * Criar usuário e retorna um token de acesso
 */
class Signup {
    async signup(request, response) {
        try {
            const { name, password } = request.body;

            // Validar parâmetros
            if (!name)  return response.status(400).json({ error: 'Nome é obrigatório!' }); 
            if (!password)  return response.status(400).json({ error: 'Senha é obrigatória!' }); 

            // Criptografia senha
            const passwordHashed = await bcrypt.hash(
                password,
                Number(process.env.SALT)
            );
            if (!password) { return response.status(400).json({ error: 'Falha hash!' }) };
            // Cria usuário
            const user = await UserModel.create({
                name,
                password: passwordHashed,
            });

            if (!user) {
                return response.status(400).json({
                    error: 'Houve um erro ao criar usuário'
                });
            }

            // Gera e retorna o access token
            const accessToken = jwt.sign(
                { id: user.id },
                process.env.TOKEN_SECRET,
                { expiresIn: '30m' }
            );

            return response.status(201).json({ accessToken });
        } catch (error) {
            return response.status(500).json({
                error: `Erro interno: ${error}`
            });
        }
    }
}

module.exports = new Signup();
