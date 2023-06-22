const { FuncionarioModel } = require('../model/funcionario-model');

class FuncionarioController {
    async create(request, response){
        try {
            const { nome, nascimento, sexo, escolariedade } = request.body;
            
            // Validar parâmetros
            if (!nome) {return response.status(400).json({error: 'Nome não inserido!'});}
            if (!nascimento) {return response.status(400).json({error: 'Nascimento não inserido!'});}
            if (!sexo) {return response.status(400).json({error: 'Sexo não inserido!'});}
            if (!escolariedade) {return response.status(400).json({error: 'Escolariedade não inserido!'});}
            
            // Verifica se funcionário existe
            const userExists = await FuncionarioModel.findOne({
                where: { nome }
            });

            if (userExists) {
                return response.status(400).json({
                    error: 'Funcionário já existe!'
                });
            }

            // Criando funcionario
            const result = await FuncionarioModel.create({
                nome,
                nascimento,
                sexo,
                escolariedade,
            });

            if (!result) {
                return response.status(400).json({
                    error: 'Houve um erro ao criar funcionário'
                });
            }
            delete result.id;
            return response.status(201).json({result});
        } catch (error) {
            return response.status(500).json({
                error: `Erro interno: ${error}`
            });
        }
    }
    async read(request, response){
        try {
            let result = await FuncionarioModel.findAll();
            const { nome, nascimento, sexo, escolariedade } = request.body;
            
            if (nome) {
                 result = result.filter( f => f.nome == nome )
            }
            if (nascimento) {
                 result = result.filter( f => f.nascimento == nascimento )
            }
            if (escolariedade){
                 result = result.filter( f => f.escolariedade == escolariedade)
            }
            if (sexo) {
                 result = result.filter( f => f.sexo == sexo )
            }
            //result.forEach( one => delete one[id] )
            return response.status(201).json({result});
        } catch (error) {
            return response.status(500).json({
                error: `Erro interno: ${error}`
            });
        }
    }
    async update(request, response){
        try {
            const { nome, nascimento, sexo, escolariedade } = request.body;
            // Verifica se funcionário existe
            
            if (!nome) {return response.status(400).json({error: 'Nome não inserido!'});}
            const funcionario = await FuncionarioModel.findOne({
                where: { nome }
            });
            if (!funcionario) {
                return response.status(400).json({
                    error: 'Funcionário não existe!'
                });
            }
            if (nascimento) {
                funcionario.nascimento = nascimento;
            }
            if (escolariedade){
                funcionario.escolariedade = escolariedade;
            }
            if (sexo) {
                funcionario.sexo = sexo;
            }
            await funcionario.save();
            return response.status(201).json({funcionario});
        } catch (error) {
            return response.status(500).json({
                error: `Erro interno: ${error}`
            });
        }
    }
    async delete(request, response){
            try {
                const { nome, nascimento, sexo, escolariedade } = request.body;
                if (!nome) {return response.status(400).json({error: 'Nome não inserido!'});}
                const result = await FuncionarioModel.destroy({ where: { nome: nome } });
                if (result == 0)
                    return response.status(400).json({error: 'Funcionário não existe!'});
                    return response.status(201).json({"mensagem":"Sucess", result});
            } catch (error) {
                return response.status(500).json({
                    error: `Erro interno: ${error}`
                });
            }
        
    }
}
module.exports = new FuncionarioController();