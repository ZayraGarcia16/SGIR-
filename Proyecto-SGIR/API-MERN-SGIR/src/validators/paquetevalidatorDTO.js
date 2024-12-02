import Joi from "joi";

// Definición del ID
const id = Joi.string()
  .pattern(/^[0-9a-fA-F]{24}$/)
  .required()
  .messages({
    "string.pattern.base": "El campo ID debe ser un ObjectId válido de 24 caracteres hexadecimales.",
    "any.required": "El campo ID es requerido.",
  });

// Definición del destino
const destino = Joi.string()
  .min(3)
  .max(90)
  .pattern(/^[A-Za-záéíóúÁÉÍÓÚñÑ\s]+$/)
  .required()
  .messages({
    "string.base": "El destino debe ser un texto.",
    "string.empty": "El destino no puede estar vacío.",
    "string.min": "El destino debe tener al menos 3 caracteres.",
    "string.max": "El destino no puede exceder los 90 caracteres.",
    "string.pattern.base": "El destino solo puede contener letras y espacios.",
    "any.required": "El destino es un campo requerido.",
  });

// Definición de la actividad
const actividad = Joi.string()
  .min(3)
  .max(90)
  .pattern(/^[A-Za-záéíóúÁÉÍÓÚñÑ\s]+$/)
  .required()
  .messages({
    "string.base": "La actividad debe ser un texto.",
    "string.empty": "La actividad no puede estar vacía.",
    "string.min": "La actividad debe tener al menos 3 caracteres.",
    "string.max": "La actividad no puede exceder los 90 caracteres.",
    "string.pattern.base": "La actividad solo puede contener letras y espacios.",
    "any.required": "La actividad es un campo requerido.",
  });

// Definición del número de personas
const numeroPersonas = Joi.number()
  .integer()
  .min(1)
  .required()
  .messages({
    "number.base": "El número de personas debe ser un número.",
    "number.integer": "El número de personas debe ser un entero.",
    "number.min": "Debe haber al menos una persona.",
    "any.required": "El número de personas es un campo requerido.",
  });

// Definición de la categoría
const categoria = Joi.string()
  .valid("paquete1", "paquete2", "paquete3")
  .required()
  .messages({
    "any.only": "La categoría debe ser 'paquete1', 'paquete2' o 'paquete3'.",
    "any.required": "La categoría es un campo requerido.",
  });

// Definición del precio
const precio = Joi.number()
  .positive()
  .precision(2)
  .required()
  .messages({
    "number.base": "El precio debe ser un número.",
    "number.positive": "El precio debe ser positivo.",
    "any.required": "El precio es un campo requerido.",
  });

// Definición del transporte
const transporte = Joi.string()
  .valid("bus", "avion", "tren", "barco")
  .required()
  .messages({
    "string.base": "El transporte debe ser un texto.",
    "any.required": "El campo transporte es requerido.",
    "any.only": "El transporte debe ser uno de los siguientes: 'bus', 'avion', 'tren', 'barco'."
  });

// Definición de la comida
const comida = Joi.string()
  .valid("todoincluido", "almuerzo incluido", "sin comida")
  .required()
  .messages({
    "string.base": "La comida debe ser un texto.",
    "any.required": "El campo comida es requerido.",
    "any.only": "La comida debe ser 'todoincluido', 'almuerzo incluido' o 'sin comida'."
  });

// Definición de la imagen
const imagen = Joi.string()
  .uri()
  .required()
  .messages({
    "string.base": "La imagen debe ser una URL válida.",
    "string.uri": "La imagen debe ser una URL válida.",
    "any.required": "La imagen es un campo requerido.",
  });

const createPaqueteSchema = Joi.object({
  destino: destino.required(),
  actividad: actividad.required(),
  numeroPersonas: numeroPersonas.required(),
  categoria: categoria.required(),
  precio: precio.required(),
  transporte: transporte.required(),
  comida: comida.required(),
  imagen: imagen.required(),
});

const updatePaqueteSchema = Joi.object({
  destino: destino.optional(),
  actividad: actividad.optional(),
  numeroPersonas: numeroPersonas.optional(),
  categoria: categoria.optional(),
  precio: precio.optional(),
  transporte: transporte.optional(),
  comida: comida.optional(),
  imagen: imagen.optional(),
});

// Esquema para obtener un paquete por ID
const getPaqueteSchema = Joi.object({
  id: id.required(),
});

// Esquema para eliminar un paquete
const deletePaqueteSchema = Joi.object({
  id: id.required(),
});

export { createPaqueteSchema, updatePaqueteSchema, getPaqueteSchema, deletePaqueteSchema };
