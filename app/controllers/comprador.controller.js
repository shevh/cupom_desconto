const db = require("../models");
const Comprador = db.compradores;
const Op = db.Sequelize.Op;

// Create and Save a new Comprador
exports.create = (req, res) => {
    // Validate request
    if (!req.body.cpf) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a Comprador
    const comprador = {
      cpf: req.body.cpf,
      nome: req.body.nome,
      email: req.body.email,
      senha: req.body.senha,
    };
  
    // Save Comprador in the database
    Comprador.create(comprador)
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

// Retrieve all Comprador from the database.
exports.findAll = (req, res) => {
    const cpf = req.query.cpf;
    var condition = cpf ? { cpf: { [Op.like]: `%${cpf}%` } } : null;
  
    Comprador.findAll({ where: condition })
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

// Find a single Comprador with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Comprador.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Comprador with id=" + id
        });
      });
  };

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
  
    Comprador.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Comprador was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Comprador with id=${id}. Maybe Comprador was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Comprador with id=" + id
        });
      });
  };

// Delete a Comprador with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Comprador.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Comprador was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Comprador with id=${id}. Maybe Comprador was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Comprador with id=" + id
        });
      });
  };

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Comprador.destroy({
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
  Comprador.findAll({ where: { published: true } })
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