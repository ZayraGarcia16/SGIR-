import Reserva from "../models/reserva.js";
import { validatorHandler } from "../middleware/validator.handler.js";
import { createReservaSchema, updateReservaSchema, getReservaSchema, deleteReservaSchema } from "../validators/reservaValidatorDTO.js";

// Crear reserva
export const createReserva = [
    validatorHandler(createReservaSchema, "body"),
    async (req, res) => {
        try {
            // Verificar si ya existe una reserva con los mismos datos
            const existingReserva = await Reserva.findOne({
                numeroDocumento: req.body.numeroDocumento,
                fechaSalida: req.body.fechaSalida,
                destino: req.body.destino,
            });

            if (existingReserva) {
                return res.status(400).json({ message: "Ya existe una reserva para estos datos." });
            }

            // Crear nueva reserva
            const reserva = new Reserva(req.body);
            const data = await reserva.save();
            res.status(201).json({ status: 'success', data });
        } catch (error) {
            console.error("Error al crear la reserva:", error);
            if (error.name === 'ValidationError') {
                return res.status(400).json({
                    status: 'error',
                    message: 'Datos inválidos',
                    details: error.errors, // detalles del error de validación
                });
            }
            res.status(500).json({ status: 'error', message: error.message });
        }
    },
];

// Obtener todas las reservas
export const getReserva = (req, res) => {
    Reserva
        .find()
        .then((data) => res.json({ status: 'success', data }))
        .catch((error) => {
            console.error(error.stack);
            res.status(500).json({ status: 'error', message: error.message });
        });
};

// Obtener una reserva por ID
export const getReservaById = [
    validatorHandler(getReservaSchema, "params"),
    async (req, resp) => {
        const { id } = req.params;
        try {
            const reserva = await Reserva.findById(id);
            if (!reserva) {
                return resp.status(404).json({
                    status: 'error',
                    message: "Reserva no encontrada",
                });
            }
            resp.json({ status: 'success', data: reserva });
        } catch (error) {
            console.error(error.stack);
            resp.status(500).json({
                status: 'error',
                message: error.message,
            });
        }
    },
];

// Actualizar una reserva
export const updateReserva = [
    validatorHandler(getReservaSchema, "params"),
    validatorHandler(updateReservaSchema, "body"),
    async (req, resp) => {
        const { id } = req.params;
        const {
            tipoDocumento,
            numeroDocumento,
            nombreCliente,
            fechaSalida,
            fechaRegreso,
            destino,
            numeroContacto,
            correoElectronico,
            cantidadPersonas,
            alojamiento,
            transporte,
            precioTotal,
            estado,
        } = req.body;

        try {
            // Buscar la reserva a actualizar
            const reserva = await Reserva.findById(id);
            if (!reserva) {
                return resp.status(404).json({ status: 'error', message: "Reserva no encontrada" });
            }

            // Crear objeto con los campos que cambiarán
            const updates = {};
            if (reserva.tipoDocumento !== tipoDocumento) updates.tipoDocumento = tipoDocumento;
            if (reserva.numeroDocumento !== numeroDocumento) updates.numeroDocumento = numeroDocumento;
            if (reserva.nombreCliente !== nombreCliente) updates.nombreCliente = nombreCliente;
            if (reserva.fechaSalida !== fechaSalida) updates.fechaSalida = fechaSalida;
            if (reserva.fechaRegreso !== fechaRegreso) updates.fechaRegreso = fechaRegreso;
            if (reserva.destino !== destino) updates.destino = destino;
            if (reserva.numeroContacto !== numeroContacto) updates.numeroContacto = numeroContacto;
            if (reserva.correoElectronico !== correoElectronico) updates.correoElectronico = correoElectronico;
            if (reserva.cantidadPersonas !== cantidadPersonas) updates.cantidadPersonas = cantidadPersonas;
            if (reserva.alojamiento !== alojamiento) updates.alojamiento = alojamiento;
            if (reserva.transporte !== transporte) updates.transporte = transporte;
            if (reserva.precioTotal !== precioTotal) updates.precioTotal = precioTotal;
            if (reserva.estado !== estado) updates.estado = estado;

            // Si no hay actualizaciones, devolver respuesta
            if (Object.keys(updates).length === 0) {
                return resp.status(400).json({ status: 'warning', message: "No se realizaron cambios" });
            }

            // Realizar la actualización
            await reserva.updateOne({ $set: updates });

            resp.status(200).json({ status: 'success', message: "Reserva actualizada correctamente" });
        } catch (error) {
            console.error(error.stack);
            resp.status(500).json({ status: 'error', message: error.message });
        }
    },
];

// Eliminar una reserva
export const deleteReserva = [
    validatorHandler(deleteReservaSchema, "params"),
    async (req, resp) => {
        const { id } = req.params;
        try {
            const result = await Reserva.deleteOne({ _id: id });

            if (result.deletedCount === 0) {
                resp.status(404).json({ status: 'error', message: "Reserva no encontrada" });
            } else {
                resp.status(200).json({ status: 'success', message: "Reserva eliminada correctamente" });
            }
        } catch (error) {
            console.error(error.stack);
            resp.status(500).json({ status: 'error', message: error.message });
        }
    },
];