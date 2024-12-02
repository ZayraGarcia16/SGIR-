import express from 'express';
import { createReserva, getReserva, getReservaById, updateReserva, deleteReserva } from '../controllers/reservacontrollers.js';

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Reserva:
 *       type: object
 *       properties:
 *         tipoDocumento:
 *           type: string
 *           description: Tipo de documento del cliente.
 *           enum: ['Tarjeta de Identidad', 'Cédula de Ciudadanía', 'Cédula de Extranjería', 'Pasaporte']
 *         numeroDocumento:
 *           type: integer
 *           description: Número de documento del cliente.
 *         nombreCliente:
 *           type: string
 *           description: Nombre completo del cliente.
 *         fechaSalida:
 *           type: string
 *           format: date
 *           description: Fecha de salida de la reserva.
 *         fechaRegreso:
 *           type: string
 *           format: date
 *           description: Fecha de regreso de la reserva.
 *         destino:
 *           type: string
 *           description: Destino de la reserva.
 *         numeroContacto:
 *           type: string
 *           description: Número de contacto del cliente (generalmente un teléfono).
 *         correoElectronico:
 *           type: string
 *           description: Correo electrónico del cliente.
 *           pattern: ^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$
 *         cantidadPersonas:
 *           type: integer
 *           description: Número de personas para la reserva (predeterminado es 1).
 *           default: 1
 *         alojamiento:
 *           type: string
 *           description: Tipo de alojamiento elegido.
 *         transporte:
 *           type: string
 *           description: Tipo de transporte elegido.
 *         precioTotal:
 *           type: number
 *           format: float
 *           description: Precio total de la reserva.
 *         estado:
 *           type: string
 *           description: Estado actual de la reserva.
 *           enum: ['Confirmada', 'Cancelada', 'Reprogramada', 'Reembolsada', 'Pendiente', 'No Presentado']
 *       required:
 *         - tipoDocumento
 *         - numeroDocumento
 *         - nombreCliente
 *         - fechaSalida
 *         - fechaRegreso
 *         - destino
 *         - numeroContacto
 *         - correoElectronico
 *         - alojamiento
 *         - transporte
 *         - precioTotal
 *         - estado
 */

/**
 * @swagger
 * /api/reservas:
 *   post:
 *     summary: Crea una nueva reserva
 *     tags: [reservas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Reserva'
 *     responses:
 *       201:
 *         description: Reserva creada exitosamente
 */
router.post('/reservas', createReserva);

/**
 * @swagger
 * /api/reservas:
 *   get:
 *     summary: Obtiene todas las reservas
 *     tags: [reservas]
 *     responses:
 *       200:
 *         description: Lista de reservas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Reserva'
 */
router.get('/reservas', getReserva);

/**
 * @swagger
 * /api/reservas/{id}:
 *   get:
 *     summary: Obtiene una reserva por ID
 *     tags: [reservas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la reserva
 *     responses:
 *       200:
 *         description: Información de la reserva
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Reserva'
 */
router.get('/reservas/:id', getReservaById);

/**
 * @swagger
 * /api/reservas/{id}:
 *   put:
 *     summary: Actualiza una reserva por ID
 *     tags: [reservas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la reserva
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Reserva'
 *     responses:
 *       200:
 *         description: Reserva actualizada exitosamente
 */
router.put('/reservas/:id', updateReserva);

/**
 * @swagger
 * /api/reservas/{id}:
 *   delete:
 *     summary: Elimina una reserva por ID
 *     tags: [reservas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la reserva
 *     responses:
 *       200:
 *         description: Reserva eliminada exitosamente
 *       404:
 *         description: Reserva no encontrada
 */
router.delete('/reservas/:id', deleteReserva);

export default router;