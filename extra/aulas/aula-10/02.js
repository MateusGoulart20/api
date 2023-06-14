const { Sequelize, DataTypes } = require('sequelize');

const database = new Sequelize('postgres://postgres:postgres@localhost:5432/postgres');

// Criar o modelo
const AlimentoModel = database.define('alimento', {
    idalimento: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    nomealimento: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    unidade_medida: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    tableName: 'alimento',
    timestamps: false,
});

// Manipular

(async () => {
    try {
        // Criar
        await AlimentoModel.create({
            idalimento: 122412313,
            nomealimento: 'Teste 2',
            unidade_medida: 'UN'
        });
        // Consultar
        const alimentos = await AlimentoModel.findAll();
        console.log(alimentos);
        // Consulta com o where
        const alimentosComKG = await AlimentoModel.findAll({
            where: {
                unidade_medida: 'KG'
            }
        });
        console.log(alimentosComKG);
    } catch (error) {
        console.error(error);
    }
})();