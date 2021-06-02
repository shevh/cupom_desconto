module.exports = app => {
    const administradores = require("../controllers/administrador.controller.js");
  
    var router = require("express").Router();

    /**
     * @swagger
     * components:
     *   schemas:
     *     Administrador:
     *       type: object
     *       required:
     *         - nome
     *       properties:
     *         id:
     *           type: integer
     *           description: The auto-generated id of administrador
     *         nome:
     *           type: string
     *           description: Nome do administrador
     *         email:
     *           type: string
     *           description: Email do administrador
     *         senha:
     *           type: string
     *           description: Senha do administrador
     *       example:
     *         nome: everton
     *         email: everton@admin.com
     *         senha: 123456
     */

    /**
    * @swagger
    * tags:
    *   name: Administradores
    *   description: API de Administrador
    */

    // Create a new administradores
    /**
     * @swagger
     * /api/administradores:
     *   post:
     *     summary: Cria novo Administrador
     *     tags: [Administradores]
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/Administrador'
     *     responses:
     *       200:
     *         description: The book was successfully created
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Administrador'
     *       500:
     *         description: Some server error
     */
    router.post("/", administradores.create);
  
    // Retrieve all administradores


    /**
     * @swagger
     * /api/administradores:
     *   get:
     *     summary: Retorna a listagem de administradores
     *     tags: [Administradores]
     *     responses:
     *       200:
     *         description: The list of the books
     */
    router.get("/", administradores.findAll);
  
    // Retrieve all published administradores
    router.get("/published", administradores.findAllPublished);
  
    // Retrieve a single administradores with id
    /**
     * @swagger
     * /api/administradores/{id}:
     *   get:
     *     summary: Pega um administrador por seu Id
     *     tags: [Administradores]
     *     parameters:
     *       - in: path
     *         name: id
     *         schema:
     *           type: integer
     *         required: true
     *         description: Id do administrador
     *     responses:
     *       200:
     *         description: Administrador encontrado
     *         contens:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Administrador'
     *       404:
     *         description: Administrador não encontrado
     */
    router.get("/:id", administradores.findOne);
  
    // Update a administradores with id
    /**
     * @swagger
     * /api/administradores/{id}:
     *   put:
     *     summary: Pega um administrador por seu Id
     *     tags: [Administradores]
     *     parameters:
     *       - in: path
     *         name: id
     *         schema:
     *           type: integer
     *         required: true
     *         description: Id do administrador
     *     responses:
     *       200:
     *         description: Administrador encontrado
     *         contens:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Administrador'
     *       404:
     *         description: Administrador não encontrado
     */
    router.put("/:id", administradores.update);
  
    // Delete a administradores with id
    router.delete("/:id", administradores.delete);
  
    // Delete all administradores
    router.delete("/", administradores.deleteAll);
  
    app.use('/api/administradores', router);
  };