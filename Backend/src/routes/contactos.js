import express from "express";
import {createContacto, getContacto, getContactoById, deleteContacto} from "../controllers/contactosControllers.js";

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Contacto:
 *       type: object
 *       properties:
 *         nombre_apellido:
 *           type: string
 *           description: Nombre y Apellido del cliente que envia el mensaje
 *         correo:
 *           type: string
 *           description: Correo electronico del cliente 
 *         asunto: 
 *           type: string
 *           description: Frase clave que caracteriza el mensaje 
 *         mensaje:
 *           type: string
 *           description: Es el mensaje el cual quiere enviar el cliente
 *         fecha:
 *           type: string
 *           description: Fecha del dia el cual se envia el mensaje
 *       required:
 *         - nombre_apellido
 *         - correo
 *         - asunto
 *         - mensaje
 *         - fecha
 */
/**
 * @swagger
 * /api/contactos:
 *   post:
 *     summary: Crea un nuevo mensaje de contacto
 *     tags: [Contactos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Contacto'
 *     responses:
 *       200:
 *         description: Mensaje enviado exitosamente
 */
router.post("/contactos", createContacto);

/**
 * @swagger
 * /api/contactos:
 *   get:
 *     summary: Obtiene todas los mensajes enviados por los clientes
 *     tags: [Contactos]
 *     responses:
 *       200:
 *         description: Lista completa de mensajes enviados 
 *         content:
 *           application/json:
 *             schema: 
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Contacto' 
 */
router.get("/contactos", getContacto);

/**
 * @swagger
 * /api/contactos/{id}:
 *   get:
 *     summary: Obtiene los mensajes por id
 *     tags: [Contactos]
 *     parameters:
 *       - in: path
 *         name: id
 *         requiered: true
 *         schema:
 *           type: string
 *         description: Id del mensaje
 *     responses: 
 *       200:
 *         description: Informacion del mensaje especifico
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Contacto' 
 */
router.get("/contactos/:id", getContactoById);

/**
 * @swagger
 * /api/contactos/{id}:
 *   delete:
 *     summary: Elimina los mensajes por id
 *     tags: [Contactos]
 *     parameters:
 *       - in: path
 *         name: id
 *         requiered: true
 *         schema:
 *           type: string
 *         description: Id del mensaje
 *     responses: 
 *       200:
 *         description: Mensaje eliminado exitosamente
 *       404:
 *         description: Mensaje no encontrado
 */
router.delete("/contactos/:id", deleteContacto);

export default router;