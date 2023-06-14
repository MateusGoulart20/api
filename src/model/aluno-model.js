const { DataTypes } = require('sequelize');
const { database } = require('../../extra/Atividades Complementares/Aula 10/nodejs-api/src/database');

const AlunoModel = database.define('aluno', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nome: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    sexo: {
        type: DataTypes.TEXT(1),
        allowNull: false,
    },
    dataNascimento: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    curso: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    cursaEnsionSuperior: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
    },
    estagiando: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
    }
}, {
    timestamps: true,
});

module.exports = { AlunoModel };