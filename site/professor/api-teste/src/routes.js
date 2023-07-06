const { Router, request } = require('express');

const { FoodModel } = require('./models/food-model');

const routes = Router();

routes.get('/foods', async (req, res) => {
    try {
        const foods = await FoodModel.findAll();
        return res.status(200).json(foods);
    } catch (error) {
        return res.status(500).json({
            error: `Erro interno! ${error}`
        });
    }
});

routes.delete('/food/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const foodExists = await FoodModel.findByPk(id);
        if (!foodExists) {
            return res.status(404).json({
                error: 'Alimento não foi econtrado!'
            });
        }
        await FoodModel.destroy({ where: { id } });
        return res.status(200).json({
            message: 'Alimento apagado com sucesso!'
        });
    } catch (error) {
        return res.status(500).json({
            error: `Erro interno! ${error}`
        });
    }
})

module.exports = { routes };
