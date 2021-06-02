const db = require("../models");
const Pessoa = db.pessoas;
const Op = db.Sequelize.Op;

// Create and Save a new Pessoa
exports.create = (req, res) => {
    // Validate request
    if (!req.body.nome) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a Pessoa
    const pessoa = {
      nomeCompleto: req.body.nomeCompleto,
      endereco: req.body.endereco,
      numero: req.body.numero,
      cep: req.body.cep,
      estado: req.body.estado,
      idAdministrador: req.body.idAdministrador,
      idComprador: req.body.idComprador,
    };
  
    // Save Pessoa in the database
    Pessoa.create(pessoa)
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

// Retrieve all Pessoa from the database.
exports.findAll = (req, res) => {
    const nomeCompleto = req.query.nomeCompleto;
    var condition = nomeCompleto ? { nomeCompleto: { [Op.like]: `%${nomeCompleto}%` } } : null;
  
    Pessoa.findAll({ where: condition })
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
  
    Pessoa.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving pessoa with id=" + id
        });
      });
  };

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
  
    Pessoa.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "pessoa was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update pessoa with id=${id}. Maybe pessoa was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating pessoa with id=" + id
        });
      });
  };

// Delete a pessoa with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Pessoa.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "pessoa was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete pessoa with id=${id}. Maybe pessoa was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete pessoa with id=" + id
        });
      });
  };

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
    Pessoa.destroy({
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
    Pessoa.findAll({ where: { published: true } })
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