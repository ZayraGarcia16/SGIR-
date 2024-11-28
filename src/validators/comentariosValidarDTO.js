import Joi from "joi";

// Creamos las validaciones para cada campo
const id = Joi.string()
  .pattern(/^[0-9a-fA-F]{24}$/)
  .required()
  .messages({
    "string.pattern.base":
      "El campo ID debe ser un ObjectId válido de 24 caracteres hexadecimales.",
    "any.required": "El campo ID es requerido.",
  });

const nombreCompleto = Joi.string()
  .min(3)
  .max(180)
  .required()
  .pattern(/^[A-Za-záéíóúÁÉÍÓÚñÑ\s]+$/)
  .messages({
    "string.base": "El nombre completo debe ser un texto.",
    "string.empty": "El nombre completo no puede estar vacío.",
    "string.min": "El nombre completo debe tener al menos 3 caracteres.",
    "string.max": "El nombre completo no puede exceder los 180 caracteres.",
    "string.pattern.base": "El nombre completo solo puede contener letras y espacios.",
    "any.required": "El nombre completo es un campo requerido.",
  });

const comentario = Joi.string()
  .min(3)
  .max(500)
  .required()
  .messages({
    "string.base": "El comentario debe ser un texto.",
    "string.empty": "El comentario no puede estar vacío.",
    "string.min": "El comentario debe tener al menos 3 caracteres.",
    "string.max": "El comentario no puede exceder los 500 caracteres.",
    "any.required": "El comentario es un campo requerido.",
  });

const valoracion = Joi.number()
  .integer()
  .min(1)
  .max(5)
  .required()
  .messages({
    "number.base": "La valoración debe ser un número.",
    "number.integer": "La valoración debe ser un número entero.",
    "number.min": "La valoración debe ser al menos 1.",
    "number.max": "La valoración no puede exceder de 5.",
    "any.required": "La valoración es un campo requerido.",
  });

const opinion = Joi.string()
  .min(3)
  .max(500)
  .messages({
    "string.base": "La opinión debe ser un texto.",
    "string.empty": "La opinión no puede estar vacía.",
    "string.min": "La opinión debe tener al menos 3 caracteres.",
    "string.max": "La opinión no puede exceder los 500 caracteres.",
  });

// Esquemas de validación
const createComentarioSchema = Joi.object({
  nombreCompleto: nombreCompleto.required(),
  comentario: comentario.required(),
  valoracion: valoracion.required(),
  opinion: opinion,
});

const updateComentarioSchema = Joi.object({
  nombreCompleto: nombreCompleto,
  comentario: comentario,
  valoracion: valoracion,
  opinion: opinion,
});

const getComentarioSchema = Joi.object({
  id: id.required(),
});

const deleteComentarioSchema = Joi.object({
  id: id.required(),
});

export {
  createComentarioSchema,
  getComentarioSchema,
  updateComentarioSchema,
  deleteComentarioSchema,
};
