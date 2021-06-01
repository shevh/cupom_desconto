module.exports = (sequelize, Sequelize) => {
    const Comprador = sequelize.define("comprador", {
      cpf: {
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
  
    return Comprador;
  };