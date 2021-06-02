module.exports = app => {
    const cupons = require("../controllers/cupom.controller.js");
  
    var router = require("express").Router();

    /**
     * @swagger
     * components:
     *   schemas:
     *     Cupom:
     *       type: object
     *       required:
     *         - codigo
     *       properties:
     *         id:
     *           type: integer
     *           description: The auto-generated id of cupom
     *         codigo:
     *           type: integer
     *           description: The codigo codigo
     *         categoria:
     *           type: string
     *           description: The codigo categoria
     *         titulo:
     *           type: string
     *           description: The codigo titulo
     *         descricao:
     *           type: string
     *           description: The codigo descricao
     *         porcentagemDesconto:
     *           type: double
     *           description: The codigo porcentagemDesconto
     *         urlProduto:
     *           type: string
     *           description: The codigo urlProduto
     *         publicado:
     *           type: boolean
     *           description: The codigo publicado
     *         caminhoImg:
     *           type: string
     *           description: The path img
     *       example:
     *         codigo: 123
     *         categoria: teste
     *         titulo: produtoX
     *         descricao: bom produto
     *         porcentagemDesconto: 10.2
     *         urlProduto: Alexander kabum.com
     *         publicado: 1
     *         caminhoImg: src/imgCupom/cupom1.png
     */

    /**
    * @swagger
    * tags:
    *   name: Cupons
    *   description: API de Cupom
    */

    // Create a new cupons
    /**
     * @swagger
     * /api/cupons:
     *   post:
     *     summary: Cria novo Cupom
     *     tags: [Cupons]
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/Cupom'
     *     responses:
     *       200:
     *         description: The book was successfully created
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Cupom'
     *       500:
     *         description: Some server error
     */
    router.post("/", cupons.create);
  
    // Retrieve all cupons


    /**
     * @swagger
     * /api/cupons:
     *   get:
     *     summary: Retorna a listagem de Cupons
     *     tags: [Cupons]
     *     responses:
     *       200:
     *         description: The list of the books
     */
    router.get("/", cupons.findAll);
  
    // Retrieve all published cupons
    router.get("/published", cupons.findAllPublished);
  
    // Retrieve a single cupons with id
    /**
     * @swagger
     * /api/cupons/{id}:
     *   get:
     *     summary: Pega um cupom por seu Id
     *     tags: [Cupons]
     *     parameters:
     *       - in: path
     *         name: id
     *         schema:
     *           type: string
     *         required: true
     *         description: The book id
     *     responses:
     *       200:
     *         description: The book description by id
     *         contens:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Cupom'
     *       404:
     *         description: The book was not found
     */
    router.get("/:id", cupons.findOne);
  
    // Update a cupons with id
    router.put("/:id", cupons.update);
  
    // Delete a cupons with id
    router.delete("/:id", cupons.delete);
  
    // Delete all cupons
    router.delete("/", cupons.deleteAll);
  
    app.use('/api/cupons', router);
  };