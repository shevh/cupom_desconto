const db = require("../models");
const Cupom = db.cupons;
const Op = db.Sequelize.Op;

// Create and Save a new Cupom
exports.create = (req, res) => {
    // Validate request
    if (!req.body.codigo) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a Cupom
    const cupom = {
      codigo: req.body.codigo,
      categoria: req.body.categoria,
      titulo: req.body.titulo,
      descricao: req.body.descricao,
      porcentagemDesconto: req.body.porcentagemDesconto,
      urlProduto: req.body.urlProduto,
      publicado: req.body.publicado ? req.body.publicado : false,
      caminhoImg: req.body.caminhoImg
    };
  
    // Save Cupom in the database
    Cupom.create(cupom)
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

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    const codigo = req.query.codigo;
    var condition = codigo ? { codigo: { [Op.like]: `%${codigo}%` } } : null;
  
    Cupom.findAll({ where: condition })
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
  
    Cupom.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving cupom with id=" + id
        });
      });
  };

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
  
    Cupom.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Cupom was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Cupom with id=${id}. Maybe cupom was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Cupom with id=" + id
        });
      });
  };

// Delete a Cupom with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Cupom.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Cupom was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Cupom with id=${id}. Maybe cupom was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Cupom with id=" + id
        });
      });
  };

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Cupom.destroy({
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
  Cupom.findAll({ where: { published: true } })
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