const { VendaModel } = require('../model/venda-model');
const { FuncionarioModel } = require('../model/funcionario-model');

class VendaController {
    async create(request, response){
        try {
            const { data, numero, status, responsavel } = request.body;
            // Validar parâmetros
            if (!data) {return response.status(400).json({error: 'data não inserido!'});}
            if (!numero) {return response.status(400).json({error: 'numero não inserido!'});}
            if (!responsavel) {return response.status(400).json({error: 'responsavel não inserido!'});}
            
            // Verifica se venda existe
            const userExists = await VendaModel.findOne({
                where: { numero }
            });
            if (userExists) {
                return response.status(400).json({
                    error: 'Venda já existe!'
                });
            }
            const nome = responsavel;
            const resp = await FuncionarioModel.findOne({
                where: { nome }
            });
            if (!resp) {
                return response.status(400).json({
                    error: 'Responsável não existe!'
                });
            }

            // Criando venda
            const result = await VendaModel.create({
                data, numero, status, responsavel:resp.id
            });

            if (!result) {
                return response.status(400).json({
                    error: 'Houve um erro ao criar venda'
                });
            }
            return response.status(201).json({result});
        } catch (error) {
            return response.status(500).json({
                error: `Erro interno: ${error}`
            });
        }
    }
    async read(request, response){
        try {
            let result = await VendaModel.findAll();
            const { data, numero, status, responsavel } = request.body;
            
            if (data) {
                 result = result.filter( f => f.data == data )
            }
            if (numero) {
                 result = result.filter( f => f.numero == numero )
            }
            if (status){
                 result = result.filter( f => f.status == status)
            }
            if (responsavel) {
                const resp = await FuncionarioModel.findOne({
                    where: { nome:responsavel }
                });
                if (!userExists) {
                    return response.status(400).json({
                        error: 'Responsável não existe!'
                    });
                }
                result = result.filter( f => f.responsavel == resp.id )
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
            const { data, numero, status, responsavel } = request.body;
            // Verifica se venda existe
            
            if (!numero) {return response.status(400).json({error: 'numero não inserido!'});}
            const venda = await VendaModel.findOne({
                where: { numero }
            });
            if (!venda) {
                return response.status(400).json({
                    error: 'Venda não existe!'
                });
            }
            if (data) {
                venda.data = data;
            }
            if (status){
                venda.status = status;
            }
            if (responsavel) {
                const resp = await FuncionarioModel.findOne({
                    where: { nome:responsavel }
                });
                if (!userExists) {
                    return response.status(400).json({
                        error: 'Responsável não existe!'
                    });
                }
                venda.responsavel == resp.id;
            }
            await venda.save();
            return response.status(201).json({venda});
        } catch (error) {
            return response.status(500).json({
                error: `Erro interno: ${error}`
            });
        }
    }
    async delete(request, response){
            try {
                const { numero } = request.body;
                if (!numero) {return response.status(400).json({error: 'numero não inserido!'});}
                const result = await VendaModel.destroy({ where: { numero: numero } });
                if (result == 0)
                    return response.status(400).json({error: 'Venda não existe!'});
                    return response.status(201).json({"mensagem":"Sucess", result});
            } catch (error) {
                return response.status(500).json({
                    error: `Erro interno: ${error}`
                });
            }
        
    }
}
module.exports = new VendaController();