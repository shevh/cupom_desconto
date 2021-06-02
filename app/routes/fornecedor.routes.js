module.exports = app => {
    const fornecedores = require("../controllers/fornecedor.controller.js");
  
    var router = require("express").Router();

    /**
     * @swagger
     * components:
     *   schemas:
     *     Fornecedor:
     *       type: object
     *       required:
     *         - nome
     *       properties:
     *         id:
     *           type: integer
     *           description: The auto-generated id of fornecedor
     *         cnpj:
     *           type: string
     *           description: CNPJ do fornecedor
     *         nome:
     *           type: string
     *           description: Nome do fornecedor
     *         email:
     *           type: string
     *           description: Email do fornecedor
     *         senha:
     *           type: string
     *           description: Senha do fornecedor
     *       example:
     *         cnpj: 1000000000
     *         nome: everton
     *         email: everton@admin.com
     *         senha: 123456
     */

    /**
    * @swagger
    * tags:
    *   name: Fornecedores
    *   description: API de Fornecedor
    */

    // Create a new fornecedores
    /**
     * @swagger
     * /api/fornecedores:
     *   post:
     *     summary: Cria novo Fornecedor
     *     tags: [Fornecedores]
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/Fornecedor'
     *     responses:
     *       200:
     *         description: The book was successfully created
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Fornecedor'
     *       500:
     *         description: Some server error
     */
    router.post("/", fornecedores.create);
  
    // Retrieve all fornecedores


    /**
     * @swagger
     * /api/fornecedores:
     *   get:
     *     summary: Retorna a listagem de fornecedores
     *     tags: [Fornecedores]
     *     responses:
     *       200:
     *         description: The list of the books
     */
    router.get("/", fornecedores.findAll);
  
    // Retrieve all published fornecedores
    router.get("/published", fornecedores.findAllPublished);
  
    // Retrieve a single fornecedores with id
    /**
     * @swagger
     * /api/fornecedores/{id}:
     *   get:
     *     summary: Pega um fornecedor por seu Id
     *     tags: [Fornecedores]
     *     parameters:
     *       - in: path
     *         name: id
     *         schema:
     *           type: integer
     *         required: true
     *         description: Id do fornecedor
     *     responses:
     *       200:
     *         description: Fornecedor encontrado
     *         contens:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Fornecedor'
     *       404:
     *         description: Fornecedor não encontrado
     */
    router.get("/:id", fornecedores.findOne);
  
    // Update a fornecedores with id
    /**
     * @swagger
     * /api/fornecedores/{id}:
     *   put:
     *     summary: Pega um fornecedor por seu Id
     *     tags: [Fornecedores]
     *     parameters:
     *       - in: path
     *         name: id
     *         schema:
     *           type: integer
     *         required: true
     *         description: Id do fornecedor
     *     responses:
     *       200:
     *         description: Fornecedor encontrado
     *         contens:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Fornecedor'
     *       404:
     *         description: Fornecedor não encontrado
     */
    router.put("/:id", fornecedores.update);
  
    // Delete a fornecedores with id
    /**
     * @swagger
     * /api/fornecedores/{id}:
     *   delete:
     *     summary: Pega um fornecedor por seu Id
     *     tags: [Fornecedores]
     *     parameters:
     *       - in: path
     *         name: id
     *         schema:
     *           type: integer
     *         required: true
     *         description: Id do fornecedor
     *     responses:
     *       200:
     *         description: Fornecedor encontrado
     *         contens:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Fornecedor'
     *       404:
     *         description: Fornecedor não encontrado
     */
    router.delete("/:id", fornecedores.delete);
  
    // Delete all fornecedores
    router.delete("/", fornecedores.deleteAll);
  
    app.use('/api/fornecedores', router);
  };