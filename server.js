const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");

db.sequelize.sync();

// Extended:
const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
          title: "API para sistema de Cupom de Desconto",
          version: "1.0.0",
          description:
            "Uma simples API para sistemas e apps de cupom de desconto",
          license: {
            name: "MIT",
            url: "https://spdx.org/licenses/MIT.html",
          },
          contact: {
            name: "Everton",
            url: "",
            email: "",
          },
        },
        servers: [
          {
            url: "http://localhost:8080",
          },
        ],
      },
    apis: ["./app/routes/*.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Teste de rota." });
//   res.status(200).send("Welcome to bezkoder application.");
});

require("./app/routes/cupom.routes")(app);
require("./app/routes/administrador.routes")(app);
require("./app/routes/comprador.routes")(app);
require("./app/routes/fornecedor.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});