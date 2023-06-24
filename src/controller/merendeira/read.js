const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { MerendeiraModel } = require('../../model/merendeira-model');

/**
 * Entra com o usuário e retorna um token de acesso
 */
class Read {
    async read(request, response) {
        try {
            const { nome } = request.body;

            // Validar parâmetros
            //if (!nome)  return response.status(400).json({ error: 'Nome é obrigatório!' }); 
            
            // Cria usuário
            let merendeiras = await MerendeiraModel.findAll();
            if(nome) merendeiras = merendeiras.filter(merendeira => merendeira.nome == nome)
            return response.status(201).json({ merendeiras });
        } catch (error) {
            return response.status(500).json({
                error: `Erro interno: ${error}`
            });
        }
    }
}

module.exports = new Read();
