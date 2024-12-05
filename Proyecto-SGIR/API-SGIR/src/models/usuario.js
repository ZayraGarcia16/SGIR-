import bycryp from 'bcrypt';
import mongoose, { Schema } from "mongoose";

export const usuarioSchema = new mongoose.Schema({



    correo: {
        type: String,
        required: true,
        unique: true,
    },

    contrasena: {
        type: String,
        required: true,
    },

    roles: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'rol',
        required: true,
    },
});
const usuario = mongoose.model('usuario', usuarioSchema);
module.exports = usuario;
const isMatch = await bcrypt.compare(contrasena, usuario.contrasenaHash);
if (!isMatch) {
    return res.status(400).json({ message: 'contrasena incorrecta' });
    const Rol = usuario.Rol.map(Rol => Rol.nombreRol);

}
