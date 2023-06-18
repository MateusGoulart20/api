const { UserModel } = require('../model/user-model');

class UserController {
    async create(request, response){
        try {
            //console.log(request.body);
            const {id, email, nome} = request.body;
            
            if(id == undefined) throw Error("id: undefined *");
            if(!Number.isInteger(id)) throw Error("id: not integer *");
            if(email == undefined) throw Error("email: undefined *");
            if(nome == undefined) throw Error("nome: undefined *");
            // id;
            //console.log(id, nome, email)
            await UserModel.create({
                id, nome, email
            });
            return response.json({
                message: `Sucess: ${nome} / ${email} / ${id} *`
            })
        } catch (error) {
            return response.json({
                message: `Falha: ${console.log(request.body)} \n${error}`
            })
        }
    }

    async find(request, response){
        try {
            const {nome, email, id} = request.body;
            if(nome != undefined){
                return response.json({
                    message: `Sucess: ${nome} / ${email} / ${id} *`
                })
            }
        } catch (error) {
            return response.json({
                message: `Falha: ${console.log(request.body)} \n${error}`
            })
        }
    }
}

module.exports = { UserController };