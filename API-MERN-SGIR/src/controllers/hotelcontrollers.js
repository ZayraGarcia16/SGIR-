import Hotel from "../models/hotel.js";
import { validatorHandler } from "../middleware/validator.handler.js";
import { createHotelSchema, updateHotelSchema, getHotelSchema, deleteHotelSchema } from "../validators/hotelvalidatorDTO.js";

export const createHotel = [
    validatorHandler(createHotelSchema, "body"),
    async (req, res) => {
        try {
            const hotel = new Hotel(req.body); 
            const savedHotel = await hotel.save();
            res.status(201).json(savedHotel);
        } catch (error) {
            res.status(500).json({ message: "Error al guardar el hotel", error: error.message });
        }
    },
];

export const getHotels = async (req, res) => {
    try {
        const hotels = await Hotel.find();
        res.json(hotels);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener los hoteles", error: error.message });
    }
};

export const getHotelById = [
    validatorHandler(getHotelSchema, "params"),
    async (req, res) => {
        const { id } = req.params;
        try {
            const hotel = await Hotel.findById(id);
            if (!hotel) {
                return res.status(404).json({
                    message: "Hotel no encontrado",
                });
            }
            res.json(hotel);
        } catch (error) {
            res.status(500).json({
                message: "Error al obtener el hotel", 
                error: error.message,
            });
        }
    },
];

export const updateHotel = [
    validatorHandler(getHotelSchema, "params"),
    validatorHandler(updateHotelSchema, "body"),
    async (req, res) => {
        const { id } = req.params;
        const { nombre, ubicacion, numeroHabitaciones, numeroPersonas, comida, precio, categoria } = req.body;

        // Verifica si los campos son proporcionados antes de la actualización
        const hotelData = {};
        if (nombre) hotelData.nombre = nombre;
        if (ubicacion) hotelData.ubicacion = ubicacion;
        if (numeroHabitaciones) hotelData.numeroHabitaciones = numeroHabitaciones;
        if (numeroPersonas) hotelData.numeroPersonas = numeroPersonas;
        if (comida) hotelData.comida = comida;
        if (precio) hotelData.precio = precio;
        if (categoria) hotelData.categoria = categoria;

        try {
            const hotelUpdate = await Hotel.findByIdAndUpdate(id, hotelData, { new: true });
            if (!hotelUpdate) {
                return res.status(404).json({ message: "Hotel no encontrado" });
            }
            res.status(200).json(hotelUpdate);
        } catch (error) {
            res.status(500).json({ message: "Error al actualizar el hotel", error: error.message });
        }
    },
];

export const deleteHotel = [
    validatorHandler(deleteHotelSchema, "params"),
    async (req, res) => {
        const { id } = req.params;
        try {
            const result = await Hotel.deleteOne({ _id: id });
            if (result.deletedCount === 0) {
                return res.status(404).json({ message: "Hotel no encontrado" });
            }
            res.status(200).json({ message: "Hotel eliminado correctamente" });
        } catch (error) {
            res.status(500).json({ message: "Error al eliminar el hotel", error: error.message });
        }
    },
];