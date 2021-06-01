module.exports = (sequelize, Sequelize) => {
    const Administrador = sequelize.define("administrador", {
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
  
    return Administrador;
  };