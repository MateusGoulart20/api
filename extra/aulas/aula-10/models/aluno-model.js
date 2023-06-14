const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

module.exports = class AlunoModel extends Model {
    id; nome; sexo; curso; grau; estagio;
    constructor(id, nome, sexo, curso, grau, estagio){
        this.id = id;
        this.nome = nome;
        this.sexo = sexo;
        this.curso = curso;
        this.grau = grau;
        this.estagio = estagio;
    }
}

AlunoModel = sequelize.define('aluno', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        nome: {
            type: DataTypes.TEXT,
            primaryKey: true,
            allowNull: false
        },
        sexo: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        curso: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        grau: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        estagio: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    }, {
        tableName: 'aluno',
        timestamps: false,
    });

/*
id integer NOT NULL PRIMARY KEY,
    nome text NOT NULL,
    sexo text NOT NULL,
    curso text NOT NULL,
    grau text NOT NULL,
    estagio integer NOT NULL);`)

*/