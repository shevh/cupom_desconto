module.exports = app => {
    const pessoas = require("../controllers/pessoa.controller.js");
  
    var router = require("express").Router();

    /**
     * @swagger
     * components:
     *   schemas:
     *     Pessoa:
     *       type: object
     *       required:
     *         - nomeCompleto
     *       properties:
     *         id:
     *           type: integer
     *           description: The auto-generated id of Pessoa
     *         nomeCompleto:
     *           type: string
     *           description: Nome Completo do Pessoa
     *         endereco:
     *           type: string
     *           description: Endereco da Pessoa
     *         numero:
     *           type: integer
     *           description: Numero da Pessoa
     *         cep:
     *           type: string
     *           description: Cep da Pessoa
     *         estado:
     *           type: string
     *           description: Estado da Pessoa
     *         idAdministrador:
     *           type: boolean
     *           description: Senha do Pessoa
     *         idComprador:
     *           type: boolean
     *           description: Senha do Pessoa
     *       example:
     *         nomeCompleto: everton 
     *         endereco: Rua da Silva Pinto
     *         numero: 123
     *         cep: 13165-000
     *         estado: Minas Gerais
     *         idAdministrador: false
     *         idComprador: true
     */

    /**
    * @swagger
    * tags:
    *   name: Pessoas
    *   description: API de Pessoa
    */

    // Create a new Pessoas
    /**
     * @swagger
     * /api/Pessoas:
     *   post:
     *     summary: Cria novo Pessoa
     *     tags: [Pessoas]
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/Pessoa'
     *     responses:
     *       200:
     *         description: The book was successfully created
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Pessoa'
     *       500:
     *         description: Some server error
     */
    router.post("/", pessoas.create);
  
    // Retrieve all Pessoas


    /**
     * @swagger
     * /api/Pessoas:
     *   get:
     *     summary: Retorna a listagem de Pessoas
     *     tags: [Pessoas]
     *     responses:
     *       200:
     *         description: The list of the books
     */
    router.get("/", pessoas.findAll);
  
    // Retrieve all published Pessoas
    router.get("/published", pessoas.findAllPublished);
  
    // Retrieve a single Pessoas with id
    /**
     * @swagger
     * /api/Pessoas/{id}:
     *   get:
     *     summary: Pega um Pessoa por seu Id
     *     tags: [Pessoas]
     *     parameters:
     *       - in: path
     *         name: id
     *         schema:
     *           type: integer
     *         required: true
     *         description: Id do Pessoa
     *     responses:
     *       200:
     *         description: Pessoa encontrado
     *         contens:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Pessoa'
     *       404:
     *         description: Pessoa não encontrado
     */
    router.get("/:id", pessoas.findOne);
  
    // Update a Pessoa with id
    /**
     * @swagger
     * /api/Pessoas/{id}:
     *   put:
     *     summary: Pega um Pessoa por seu Id
     *     tags: [Pessoas]
     *     parameters:
     *       - in: path
     *         name: id
     *         schema:
     *           type: integer
     *         required: true
     *         description: Id do Pessoa
     *     responses:
     *       200:
     *         description: Pessoa encontrado
     *         contens:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Pessoa'
     *       404:
     *         description: Pessoa não encontrado
     */
    router.put("/:id", pessoas.update);
  
    // Delete a Pessoa with id
    /**
     * @swagger
     * /api/Pessoas/{id}:
     *   delete:
     *     summary: Pega um Pessoa por seu Id
     *     tags: [Pessoas]
     *     parameters:
     *       - in: path
     *         name: id
     *         schema:
     *           type: integer
     *         required: true
     *         description: Id do Pessoa
     *     responses:
     *       200:
     *         description: Pessoa encontrado
     *         contens:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Pessoa'
     *       404:
     *         description: Pessoa não encontrado
     */
    router.delete("/:id", pessoas.delete);
  
    // Delete all Pessoas
    router.delete("/", pessoas.deleteAll);
  
    app.use('/api/pessoas', router);
  };