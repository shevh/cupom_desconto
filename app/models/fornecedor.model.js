module.exports = (sequelize, Sequelize) => {
    const Fornecedor = sequelize.define("fornecedor", {
      cnpj: {
        type: Sequelize.STRING
      },
      nome: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      senha: {
        type: Sequelize.STRING
      }
    });
  
    return Fornecedor;
  };