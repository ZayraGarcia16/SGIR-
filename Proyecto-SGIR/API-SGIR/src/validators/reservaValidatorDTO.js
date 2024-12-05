import Joi from 'joi';

// Esquema de validación para la creación de una reserva
const createReservaSchema = Joi.object({
  tipoDocumento: Joi.string().valid('Tarjeta de Identidad', 'Cédula de Ciudadanía', 'Cédula de Extranjería', 'Pasaporte').required(),
  numeroDocumento: Joi.number().min(1000000).max(999999999).required(),
  cliente: Joi.string().required(), // ID del cliente
  fechaSalida: Joi.date().greater('now').required(), // Debe ser una fecha futura
  fechaRegreso: Joi.date().greater(Joi.ref('fechaSalida')).required(), // Debe ser posterior a la fecha de salida
  destino: Joi.string().required(),
  hotel: Joi.string().required(), // ID del hotel
  paquete: Joi.string().required(), // ID del paquete
  excursion: Joi.string().required(), // ID de la excursión
  numeroContacto: Joi.string().pattern(/^\d{10}$/).required(), // 10 dígitos para el teléfono
  cantidadPersonas: Joi.number().min(1).default(1), // Número de personas debe ser al menos 1
  alojamiento: Joi.string().required(),
  transporte: Joi.string().required(),
  precioTotal: Joi.number().min(0).required(), // El precio total debe ser un valor positivo
  estado: Joi.string().valid('Confirmada', 'Cancelada', 'Reprogramada', 'Reembolsada', 'Pendiente', 'No Presentado').required()
});

// Esquema de validación para la actualización de una reserva
const updateReservaSchema = Joi.object({
  tipoDocumento: Joi.string().valid('Tarjeta de Identidad', 'Cédula de Ciudadanía', 'Cédula de Extranjería', 'Pasaporte').optional(),
  numeroDocumento: Joi.number().min(1000000).max(999999999).optional(),
  cliente: Joi.string().optional(), // ID del cliente
  fechaSalida: Joi.date().greater('now').optional(), // Debe ser una fecha futura
  fechaRegreso: Joi.date().greater(Joi.ref('fechaSalida')).optional(), // Debe ser posterior a la fecha de salida
  destino: Joi.string().optional(),
  hotel: Joi.string().optional(), // ID del hotel
  paquete: Joi.string().optional(), // ID del paquete
  excursion: Joi.string().optional(), // ID de la excursión
  numeroContacto: Joi.string().pattern(/^\d{10}$/).optional(), // 10 dígitos para el teléfono
  cantidadPersonas: Joi.number().min(1).optional(), // Número de personas debe ser al menos 1
  alojamiento: Joi.string().optional(),
  transporte: Joi.string().optional(),
  precioTotal: Joi.number().min(0).optional(), // El precio total debe ser un valor positivo
  estado: Joi.string().valid('Confirmada', 'Cancelada', 'Reprogramada', 'Reembolsada', 'Pendiente', 'No Presentado').optional()
});

// Esquema de validación para la eliminación de una reserva
const deleteReservaSchema = Joi.object({
  id: Joi.string().hex().length(24).required() // ID debe ser un ObjectId válido de MongoDB
});
const getReservaByIdSchema = Joi.object({
  id: Joi.string().hex().length(24).required() // ID debe ser un ObjectId válido de MongoDB
});

// Exportar todos los esquemas para usarlos en el controlador
export { createReservaSchema, deleteReservaSchema, getReservaByIdSchema ,updateReservaSchema};