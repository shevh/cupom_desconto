module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "",
    DB: "cupom_desconto",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };