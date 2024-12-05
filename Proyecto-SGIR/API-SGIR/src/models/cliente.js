import mongoose, { Schema } from "mongoose";

const clienteSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    apellido: {
        type: String,
        required: true,
    },
    correo: {
        type: String,
        required: true,
        unique: true
    },
    usuario: {
        type: String,
        required: true,
    },
    contrasena: {
        type: String,
        required: true,
    },


});

export default mongoose.model("clientes", clienteSchema);



