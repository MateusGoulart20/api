const { ProdutoModel } = require('../model/produto-model');

class ProdutoController {
    async create(request, response){
        try {
            const { descricao, preco, marca, vencimento, tipo } = request.body;
            
            // Validar parâmetros
            if (!descricao) {return response.status(400).json({error: 'Descricao não inserida!'});}
            if (!preco) {return response.status(400).json({error: 'Preco não inserido!'});}
            if (!marca) {return response.status(400).json({error: 'marca não inserido!'});}
            if (!vencimento) {return response.status(400).json({error: 'vencimento não inserido!'});}
            if (!tipo) {return response.status(400).json({error: 'tipo não inserido!'});}
            
            // Verifica se produto existe
            const userExists = await ProdutoModel.findOne({
                where: { descricao }
            });

            if (userExists) {
                return response.status(400).json({
                    error: 'Produto já existe!'
                });
            }

            // Criando produto
            const result = await ProdutoModel.create({
                descricao, preco, marca, vencimento, tipo
            });

            if (!result) {
                return response.status(400).json({
                    error: 'Houve um erro ao criar o produto'
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
            let result = await ProdutoModel.findAll();
            const { descricao, preco, marca, vencimento, tipo } = request.body;
            
            if (descricao) {
                 result = result.filter( f => f.descricao == descricao )
            }
            if (marca) {
                 result = result.filter( f => f.marca == marca )
            }
            if (tipo){
                 result = result.filter( f => f.tipo == tipo)
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
            const { descricao, preco, marca, vencimento, tipo } = request.body;
            // Verifica se funcionário existe
            
            if (!descricao) {return response.status(400).json({error: 'Descricao não inserida!'});}
            const produto = await ProdutoModel.findOne({
                where: { descricao }
            });
            if (!produto) {
                return response.status(400).json({
                    error: 'Produto não existe!'
                });
            }
            if (preco) {produto.preco = preco;}
            if (marca){produto.marca = marca;}
            if (vencimento) {produto.vencimento = vencimento;}
            if (tipo) {produto.tipo = tipo;}
            await produto.save();
            return response.status(201).json({produto});
        } catch (error) {
            return response.status(500).json({
                error: `Erro interno: ${error}`
            });
        }
    }
    async delete(request, response){
            try {
                const { descricao, preco, marca, vencimento, tipo } = request.body;
                if (!descricao) {return response.status(400).json({error: 'descricao não inserido!'});}
                const result = await ProdutoModel.destroy({ where: { descricao: descricao } });
                if (result == 0)
                    return response.status(400).json({error: 'Produto não existe!'});
                    return response.status(201).json({"mensagem":"Sucess", result});
            } catch (error) {
                return response.status(500).json({
                    error: `Erro interno: ${error}`
                });
            }
        
    }
}
module.exports = new ProdutoController();