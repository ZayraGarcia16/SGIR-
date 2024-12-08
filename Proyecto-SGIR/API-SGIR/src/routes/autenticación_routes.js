import express from "express";
import { verifyJWT, verifyRol } from "../midleware/authMiddleware.js";
import { loginUsuario, obtenerUsuarios } from "../controllers/usuarioController.js";

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Usuario:
 *       type: object
 *       properties:
 *         correo:
 *           type: string
 *           description: Correo electrónico del usuario
 *         contrasena:
 *           type: string
 *           description: Contraseña del usuario
 *         roles:
 *           type: string
 *           description: Rol del usuario (Admin o Usuario)
 *       required:
 *         - correo
 *         - contrasena
 *         - roles
 *       example:
 *         correo: "admin@example.com"
 *         contrasena: "admin123"
 *         roles: "Admin"
 */

/**
 * @swagger
 * /api/usuarios/login:
 *   post:
 *     summary: Inicia sesión para obtener un token JWT
 *     tags: [Usuarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Usuario'
 *     responses:
 *       200:
 *         description: Inicio de sesión exitoso
 *       400:
 *         description: Credenciales incorrectas
 */
router.post("/login", loginUsuario);

/**
 * @swagger
 * /api/usuarios:
 *   get:
 *     summary: Obtiene la lista de usuarios (solo Admin)
 *     tags: [Usuarios]
 *     responses:
 *       200:
 *         description: Lista de usuarios obtenida
 *       403:
 *         description: Acceso denegado
 */
router.get("/", verifyJWT, verifyRol(["Admin"]), obtenerUsuarios);

export default router;

