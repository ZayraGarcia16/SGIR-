import Joi from 'joi';

const id = Joi.string()
  .pattern(/^[0-9a-fA-F]{24}$/)
  .required()
  .messages({
    'string.pattern.base': 'El campo ID debe ser un ObjectId válido de 24 caracteres hexadecimales.',
    'any.required': 'El campo ID es requerido.',
  });

const tipoDocumento = Joi.string()
  .valid('Tarjeta de Identidad', 'Cédula de Ciudadanía', 'Cédula de Extranjería', 'Pasaporte')
  .required()
  .messages({
    'any.only': 'El tipo de documento debe ser "Tarjeta de Identidad", "Cédula de Ciudadanía", "Cédula de Extranjería" o "Pasaporte".',
    'any.required': 'El tipo de documento es requerido.',
  });

const numeroDocumento = Joi.number()
  .integer()
  .min(1)
  .required()
  .messages({
    'number.base': 'El número de documento debe ser un número.',
    'number.min': 'El número de documento debe ser mayor a cero.',
    'any.required': 'El número de documento es requerido.',
  });

const nombreCliente = Joi.string()
  .min(3)
  .max(90)
  .pattern(/^[A-Za-záéíóúÁÉÍÓÚñÑ\s]+$/)
  .required()
  .messages({
    'string.base': 'El nombre del cliente debe ser un texto.',
    'string.empty': 'El nombre del cliente no puede estar vacío.',
    'string.min': 'El nombre del cliente debe tener al menos 3 caracteres.',
    'string.max': 'El nombre del cliente no puede exceder los 90 caracteres.',
    'string.pattern.base': 'El nombre del cliente solo puede contener letras y espacios.',
    'any.required': 'El nombre del cliente es requerido.',
  });

const fechaSalida = Joi.date()
  .required()
  .messages({
    'date.base': 'La fecha de salida debe ser una fecha válida.',
    'any.required': 'La fecha de salida es requerida.',
  });

const fechaRegreso = Joi.date()
  .min(Joi.ref('fechaSalida'))
  .required()
  .messages({
    'date.base': 'La fecha de regreso debe ser una fecha válida.',
    'date.min': 'La fecha de regreso debe ser posterior a la fecha de salida.',
    'any.required': 'La fecha de regreso es requerida.',
  });

const destino = Joi.string()
  .min(3)
  .max(90)
  .required()
  .messages({
    'string.base': 'El destino debe ser un texto.',
    'string.empty': 'El destino no puede estar vacío.',
    'string.min': 'El destino debe tener al menos 3 caracteres.',
    'string.max': 'El destino no puede exceder los 90 caracteres.',
    'any.required': 'El destino es un campo requerido.',
  });

const numeroContacto = Joi.string()
  .required()
  .messages({
    'string.base': 'El número de contacto debe ser un texto.',
    'any.required': 'El número de contacto es requerido.',
  });

const correoElectronico = Joi.string()
  .email()
  .required()
  .messages({
    'string.email': 'El correo electrónico debe ser válido.',
    'any.required': 'El correo electrónico es requerido.',
  });

const tipoPaquete = Joi.string()
  .required()
  .messages({
    'string.base': 'El tipo de paquete debe ser un texto.',
    'any.required': 'El tipo de paquete es requerido.',
  });

const cantidadPersonas = Joi.number()
  .integer()
  .min(1)
  .default(1)
  .required()
  .messages({
    'number.base': 'La cantidad de personas debe ser un número.',
    'number.min': 'La cantidad de personas debe ser al menos 1.',
    'any.required': 'La cantidad de personas es requerida.',
  });

const alojamiento = Joi.string()
  .required()
  .messages({
    'string.base': 'El alojamiento debe ser un texto.',
    'any.required': 'El alojamiento es requerido.',
  });

const transporte = Joi.string()
  .required()
  .messages({
    'string.base': 'El transporte debe ser un texto.',
    'any.required': 'El transporte es requerido.',
  });

const precioTotal = Joi.number()
  .required()
  .messages({
    'number.base': 'El precio total debe ser un número.',
    'any.required': 'El precio total es requerido.',
  });

const estado = Joi.string()
  .valid('Confirmada', 'Cancelada', 'Reprogramada', 'Reembolsada', 'Pendiente', 'No Presentado')
  .required()
  .messages({
    'any.only': 'El estado debe ser "Confirmada", "Cancelada", "Reprogramada", "Reembolsada", "Pendiente" o "No Presentado".',
    'any.required': 'El estado es requerido.',
  });

const createReservaSchema = Joi.object({
  tipoDocumento,
  numeroDocumento,
  nombreCliente,
  fechaSalida,
  fechaRegreso,
  destino,
  numeroContacto,
  correoElectronico,
  tipoPaquete,
  cantidadPersonas,
  alojamiento,
  transporte,
  precioTotal,
  estado,
});

const updateReservaSchema = Joi.object({
  tipoDocumento,
  numeroDocumento,
  nombreCliente,
  fechaSalida,
  fechaRegreso,
  destino,
  numeroContacto,
  correoElectronico,
  tipoPaquete,
  cantidadPersonas,
  alojamiento,
  transporte,
  precioTotal,
  estado,
});

const getReservaSchema = Joi.object({
  id,
});

const deleteReservaSchema = Joi.object({
  id,
});

export { createReservaSchema, updateReservaSchema, getReservaSchema, deleteReservaSchema };
