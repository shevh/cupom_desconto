module.exports = (sequelize, Sequelize) => {
    const Pessoa = sequelize.define("pessoa", {
      nomeCompleto: {
        type: Sequelize.STRING
      },
      endereco: {
        type: Sequelize.STRING
      },
      numero: {
        type: Sequelize.INTEGER
      },
      cep: {
        type: Sequelize.STRING
      },
      estado: {
        type: Sequelize.STRING
      },
      idAdministrador: {
        type: Sequelize.BOOLEAN
      },
      idComprador: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Pessoa;
  };