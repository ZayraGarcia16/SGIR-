import mongoose from "mongoose";

const contactoSchema = mongoose.Schema({
    nombre_apellido:{
        type: 'string',
        required: true,
    },
    correo: {
        type: 'string',
        required: true,
    },
    asunto: {
        type: 'string',
        required: true,
    },
    mensaje: {
        type: 'string',
        required: true,
    },
    fecha: {
        type: 'date',
        required: true,
    },
});

export default mongoose.model('contacto', contactoSchema);