import express from "express";
import {
  crearcliente,
  obtenercliente,
  actualizarcliente,
  borrarcliente
} from "../controllers/controladorcliente.js"; 

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Cliente:
 *       type: object
 *       properties:
 *         nombre:
 *           type: string
 *           description: Nombre del cliente
 *         apellido:
 *           type: string
 *           description: Apellido del cliente
 *         correo:
 *           type: string
 *           description: Correo electrónico del cliente
 *         usuario:
 *           type: string
 *           description: Nombre de usuario para la autenticación
 *         contrasena:
 *           type: string
 *           description: Contraseña del cliente
 *         token:
 *           type: string
 *           description: Token de autenticación
 *       required:
 *         - nombre
 *         - apellido
 *         - correo
 *         - usuario
 *         - contrasena
 *         - token
 *       example:
 *         nombre: "Juan"
 *         apellido: "Perez"
 *         correo: "juanperez@example.com"
 *         usuario: "juan123"
 *         contrasena: "password123"
 *         token: "abc123xyz"
 */

/**
 * @swagger
 * /api/clientes:
 *   post:
 *     summary: Crea un nuevo cliente
 *     tags: [clientes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Cliente'
 *     responses:
 *       200:
 *         description: Cliente creado exitosamente
 */
router.post("/clientes", crearcliente);

/**
 * @swagger
 * /api/clientes:
 *   get:
 *     summary: Obtiene todos los clientes
 *     tags: [clientes]
 *     responses:
 *       200:
 *         description: Lista de clientes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Cliente'
 */
router.get("/clientes", obtenercliente);

/**
 * @swagger
 * /api/clientes/{id}:
 *   get:
 *     summary: Obtiene un cliente por ID
 *     tags: [clientes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del cliente
 *     responses:
 *       200:
 *         description: Información del cliente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cliente'
 */
router.get("/clientes/:id", obtenercliente);

/**
 * @swagger
 * /api/clientes/{id}:
 *   put:
 *     summary: Actualiza un cliente por ID
 *     tags: [clientes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del cliente
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Cliente'
 *     responses:
 *       200:
 *         description: Cliente actualizado
 */
router.put("/clientes/:id", actualizarcliente);

/**
 * @swagger
 * /api/clientes/{id}:
 *   delete:
 *     summary: Elimina un cliente por ID
 *     tags: [clientes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del cliente
 *     responses:
 *       200:
 *         description: Cliente eliminado
 *       404:
 *         description: Cliente no encontrado
 */
router.delete("/clientes/:id", borrarcliente);

export default router;
