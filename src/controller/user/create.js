const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { UserModel } = require('../../model/user-model');

/**
 * Criar usuário e retorna um token de acesso
 */
class Create {
    async create(request, response) {
        try {
            let { name, password } = request.body;

            // Validar parâmetros
            if (!name)  return response.status(400).json({ error: 'Nome é obrigatório!' }); 
            if (!password)  return response.status(400).json({ error: 'Senha é obrigatória!' }); 
            // Criptografia senha
            const passwordHashed = await bcrypt.hash(
                password,
                Number(process.env.SALT)
            );
            if (!passwordHashed) { return response.status(400).json({
                error: 'Falha hash!'
            }) };
            password = passwordHashed;
            // Cria usuário
            const user = await UserModel.create({
                name,
                password,
            });
            if (!user) {
                return response.status(400).json({
                    error: 'Houve um erro ao criar usuário'
                });
            }
            return response.status(201).json({ message: "sucess" });
        } catch (error) {
            return response.status(500).json({
                error: `Erro interno: ${error}`
            });
        }
    }
}
module.exports = new Create();
