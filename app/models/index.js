const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.cupons = require("./cupom.model.js")(sequelize, Sequelize);
db.administradores = require("./administrador.model.js")(sequelize, Sequelize);
db.compradores = require("./comprador.model.js")(sequelize, Sequelize);
db.fornecedores = require("./fornecedor.model.js")(sequelize, Sequelize);

module.exports = db;