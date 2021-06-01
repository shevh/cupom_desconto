module.exports = app => {
    const compradores = require("../controllers/comprador.controller.js");
  
    var router = require("express").Router();

    /**
     * @swagger
     * components:
     *   schemas:
     *     Comprador:
     *       type: object
     *       required:
     *         - nome
     *       properties:
     *         id:
     *           type: integer
     *           description: The auto-generated id of comprador
     *         cpf:
     *           type: string
     *           description: CPF do comprador
     *         nome:
     *           type: string
     *           description: Nome do comprador
     *         email:
     *           type: string
     *           description: Email do comprador
     *         senha:
     *           type: string
     *           description: Senha do comprador
     *       example:
     *         cpf: 13155698710
     *         nome: everton
     *         email: everton@admin.com
     *         senha: 123456
     */

    /**
    * @swagger
    * tags:
    *   name: Compradores
    *   description: API de Comprador
    */

    // Create a new comprador
    /**
     * @swagger
     * /api/compradores:
     *   post:
     *     summary: Cria novo Comprador
     *     tags: [Compradores]
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/Comprador'
     *     responses:
     *       200:
     *         description: The book was successfully created
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Comprador'
     *       500:
     *         description: Some server error
     */
    router.post("/", compradores.create);
  
    // Retrieve all compradores


    /**
     * @swagger
     * /api/compradores:
     *   get:
     *     summary: Retorna a listagem de compradores
     *     tags: [Compradores]
     *     responses:
     *       200:
     *         description: The list of the books
     */
    router.get("/", compradores.findAll);
  
    // Retrieve all published compradores
    router.get("/published", compradores.findAllPublished);
  
    // Retrieve a single compradores with id
    /**
     * @swagger
     * /api/compradores/{id}:
     *   get:
     *     summary: Pega um comprador por seu Id
     *     tags: [Compradores]
     *     parameters:
     *       - in: path
     *         name: id
     *         schema:
     *           type: integer
     *         required: true
     *         description: Id do comprador
     *     responses:
     *       200:
     *         description: Comprador encontrado
     *         contens:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Comprador'
     *       404:
     *         description: Comprador não encontrado
     */
    router.get("/:id", compradores.findOne);
  
    // Update a compradores with id
    router.put("/:id", compradores.update);
  
    // Delete a compradores with id
    router.delete("/:id", compradores.delete);
  
    // Delete all compradores
    router.delete("/", compradores.deleteAll);
  
    app.use('/api/compradores', router);
  };