const { Model, DataTypes } = require('sequelize');
class FuncionarioModel extends Model {
    static init(database){
        super.init({
            nome: DataTypes.TEXT,
            nascimento: DataTypes.DATE,
            sexo: DataTypes.TEXT,
            escolariedade: DataTypes.TEXT,
        },{
            modelName: 'Funcionario',
            tableName: 'funcionario',
            timestamps: false,
            sequelize: database,
        });
    }
}
module.exports = { FuncionarioModel };