const { AlunoModel } = require('../model/aluno-model');

class AlunoController {
    async cadastrarAluno(nome, sexo, dataNascimento, curso, cursaEnsionSuperior, estagiando) {
        try {
            const result = await AlunoModel.create({
                nome,
                sexo,
                dataNascimento,
                curso,
                cursaEnsionSuperior,
                estagiando
            });
            return result;
        } catch (error) {
            console.error('Erro cadastrar aluno:', error);
        }
    }
}

module.exports = { AlunoController };