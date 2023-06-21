const { Model, DataTypes } = require("sequelize");

class VendaProdutoModel extends Model {
    static init(database) {
        super.init({
            venda: DataTypes.INTEGER,
            produto: DataTypes.INTEGER
        }, {
            modelName: 'VendaProduto',
            tableName: 'venda_produto',
            timestamps: false, 
            sequelize: database
        });
    }
}

module.exports = { VendaProdutoModel };
