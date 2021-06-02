module.exports = (sequelize, Sequelize) => {
    const Cupom = sequelize.define("cupom", {
      codigo: {
        type: Sequelize.INTEGER
      },
      categoria: {
        type: Sequelize.STRING
      },
      titulo: {
        type: Sequelize.STRING
      },
      descricao: {
        type: Sequelize.STRING
      },
      porcentagemDesconto: {
        type: Sequelize.DOUBLE
      },
      urlProduto: {
        type: Sequelize.STRING
      },
      publicado: {
        type: Sequelize.BOOLEAN
      },
      caminhoImg: {
        type: Sequelize.STRING
      }
    });
  
    return Cupom;
  };