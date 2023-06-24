const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { EstoqueDiarioModel } = require('../../model/estoque_diario');
const { MerendeiraModel } = require('../../model/merendeira-model');
const e = require('express');

/**
 * Criar usuário e retorna um token de acesso
 */
class Create {
    async create(request, response) {
        try {
            let { data, qtddeitens, merendeira } = request.body;

            // Validar parâmetros
            if (!merendeira) return response.status(400).json({ error: 'Nome da merendeira é obrigatório!' });
            let nome = merendeira;
            console.log(merendeira)
            let existe = await MerendeiraModel.findOne({
                where: {
                    nome
                }
            });
            
            console.log(existe)
            existe = existe.dataValues;
            console.log(existe)
            if(!existe) return response.status(400).json({ error: 'Merendeira não existe!' });
            if(!data) return response.status(400).json({ error: 'Data é obrigatória!' });
            if(!qtddeitens) return response.status(400).json({ error: 'Quantidade de itens é obrigatório!' });
            
            merendeira = existe.id;
            console.log(merendeira)
            console.log("a")
            await EstoqueDiarioModel.create({
                data, qtddeitens, merendeira
            });
            console.log("b")

            return response.status(201).json({ message: "sucess" });
        } catch (error) {
            return response.status(500).json({
                error: `Erro interno: ${error}`
            });
        }
    }
}
module.exports = new Create();
