import Reserva from '../models/reserva.js'; 
import { validatorHandler } from '../middleware/validator.handler.js';
import { 
  createReservaSchema, 
  updateReservaSchema, 
  getReservaByIdSchema, 
  deleteReservaSchema 
} from '../validators/reservaValidatorDTO.js'; 

// Obtener todas las reservas con detalles del cliente, paquete turístico, hotel y excursión
export const getReserva = async (req, res) => {
    try {
        const reservas = await Reserva.find()
            .populate('cliente', 'nombre correo') 
            .populate('paquete', 'nombre precio') 
            .populate('hotel', 'nombre') 
            .populate('excursion', 'nombre');

        res.json(reservas);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener las reservas' });
    }
};

// Obtener una reserva por ID con detalles del cliente, paquete turístico, hotel y excursión
export const getReservaById = [
  validatorHandler(getReservaByIdSchema, 'params'),
  async (req, res) => {
    const { id } = req.params;
    try {
        const reserva = await Reserva.findById(id)
            .populate('cliente', 'nombre correo')
            .populate('paquete', 'nombre precio')
            .populate('hotel', 'nombre')
            .populate('excursion', 'nombre');

        if (reserva) {
            res.json(reserva);
        } else {
            res.status(404).json({ message: 'Reserva no encontrada' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener la reserva' });
    }
  },
];

// Crear una nueva reserva
export const createReserva = [
  validatorHandler(createReservaSchema, 'body'),
  async (req, res) => {
    const { tipoDocumento, numeroDocumento, cliente, fechaSalida, fechaRegreso, destino, hotel, paquete, excursion, numeroContacto, cantidadPersonas, alojamiento, transporte, precioTotal, estado } = req.body;

    try {
        const nuevaReserva = new Reserva({
            tipoDocumento,
            numeroDocumento,
            cliente,
            fechaSalida,
            fechaRegreso,
            destino,
            hotel,
            paquete,
            excursion,
            numeroContacto,
            cantidadPersonas,
            alojamiento,
            transporte,
            precioTotal,
            estado
        });

        const reservaGuardada = await nuevaReserva.save();
        res.status(201).json({ id: reservaGuardada._id, message: 'Reserva creada exitosamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear la reserva' });
    }
  },
];

// Actualizar una reserva
export const updateReserva = [
  validatorHandler(updateReservaSchema, 'params'),
  validatorHandler(updateReservaSchema, 'body'),
  async (req, res) => {
    const { id } = req.params;
    const { tipoDocumento, numeroDocumento, cliente, fechaSalida, fechaRegreso, destino, hotel, paquete, excursion, numeroContacto, cantidadPersonas, alojamiento, transporte, precioTotal, estado } = req.body;

    try {
        const reservaActualizada = await Reserva.findByIdAndUpdate(id, {
            tipoDocumento,
            numeroDocumento,
            cliente,
            fechaSalida,
            fechaRegreso,
            destino,
            hotel,
            paquete,
            excursion,
            numeroContacto,
            cantidadPersonas,
            alojamiento,
            transporte,
            precioTotal,
            estado
        }, { new: true });

        if (reservaActualizada) {
            res.json({ message: 'Reserva actualizada exitosamente', reserva: reservaActualizada });
        } else {
            res.status(404).json({ message: 'Reserva no encontrada' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al actualizar la reserva' });
    }
  },
];

// Eliminar una reserva
export const deleteReserva = [
  validatorHandler(deleteReservaSchema, 'params'),
  async (req, res) => {
    const { id } = req.params;
    try {
        const reservaEliminada = await Reserva.findByIdAndDelete(id);

        if (reservaEliminada) {
            res.json({ message: 'Reserva eliminada exitosamente' });
        } else {
            res.status(404).json({ message: 'Reserva no encontrada' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al eliminar la reserva' });
    }
  },
];