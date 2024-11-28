import mongoose from "mongoose";

const excursionSchema = mongoose.Schema({
    categoria: {
        type: String,
        enum: ['excursion 1', 'excursion 2', 'excursion 3'],
        required: true
    },
    descripcion:{
        type: String,
        required: true
    },
    destino: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    duracion: {
        type: String,
        required: true
    },
    transporte: {
        type: String,
        required: true
    },
    comida: {
        type: String,
        required: true
    },
    actividad: {
        type: String,
        required: true
    },

},

    { Collection: 'excursion' });
export default mongoose.model('excursion', excursionSchema);