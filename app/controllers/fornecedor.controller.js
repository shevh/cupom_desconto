const db = require("../models");
const Fornecedor = db.fornecedores;
const Op = db.Sequelize.Op;

// Create and Save a new Fornecedor
exports.create = (req, res) => {
    // Validate request
    if (!req.body.cnpj) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a Fornecedor
    const fornecedor = {
      cnpj: req.body.cnpj,
      nome: req.body.nome,
      email: req.body.email,
      senha: req.body.senha,
    };
  
    // Save Fornecedor in the database
    Fornecedor.create(fornecedor)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial."
        });
      });
  };

// Retrieve all Fornecedor from the database.
exports.findAll = (req, res) => {
    const cnpj = req.query.cnpj;
    var condition = cnpj ? { cnpj: { [Op.like]: `%${cnpj}%` } } : null;
  
    Fornecedor.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Fornecedor.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Fornecedor with id=" + id
        });
      });
  };

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
  
    Fornecedor.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Fornecedor was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Fornecedor with id=${id}. Maybe Fornecedor was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Fornecedor with id=" + id
        });
      });
  };

// Delete a Fornecedor with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Fornecedor.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Fornecedor was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Fornecedor with id=${id}. Maybe Fornecedor was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Fornecedor with id=" + id
        });
      });
  };

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Fornecedor.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Tutorials were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all tutorials."
        });
      });
  };

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  Fornecedor.findAll({ where: { published: true } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };