require('../database');

const { FoodModel } = require('../models/food-model');

const foods = [
    {
        nome: 'Arroz',
        unidadeMedida: 'Kg'
    },
    {
        nome: 'Maça',
    },
    {
        nome: 'Leite',
        unidadeMedida: 'mL'
    },
    {
        nome: 'Feijão',
        unidadeMedida: 'Kg'
    },
    {
        nome: 'Farinha de Trigo',
        unidadeMedida: 'Kg'
    },
    {
        nome: 'Tomate',
        unidadeMedida: 'Kg'
    },
    {
        nome: 'Banana',
        unidadeMedida: 'Kg'
    },
    {
        nome: 'Melância',
        unidadeMedida: 'Kg'
    },
    {
        nome: 'Mandioca',
        unidadeMedida: 'Kg'
    },
    {
        nome: 'Ovos',
    },
    {
        nome: 'Coca Cola',
        unidadeMedida: 'mL'
    },
    {
        nome: 'Óleo',
        unidadeMedida: 'L'
    },
    {
        nome: 'Carne Moída',
        unidadeMedida: 'Kg'
    },
    {
        nome: 'Vinagre',
        unidadeMedida: 'mL'
    },
    {
        nome: 'Costela',
    },
    {
        nome: 'Peito de Frango',
        unidadeMedida: 'Kg'
    },
    {
        nome: 'Suco',
        unidadeMedida: 'ml'
    },
];

(async () => {
    for (let food of foods) {
        await FoodModel.create({
            nome: food.nome,
            unidadeMedida: food.unidadeMedida
        });
    }
    console.log('Tudo cadastrado!');
})();
