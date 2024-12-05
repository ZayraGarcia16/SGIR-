const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt'); // Corregido: antes estaba escrito como "requite"
const Usuario = require('../models/usuario.js'); // Corregido: camino relativo a 'usuario.js'
require('dotenv').config();

const login = async (req, res) => {
    const { correo, contrasena } = req.body;

    try {
        // Busca el usuario por correo
        const usuario = await Usuario.findOne({ correo }).populate('roles');
        if (!usuario) {
            return res.status(400).json({ message: 'Usuario no encontrado' });
        }

        // Compara la contraseña proporcionada con el hash almacenado
        const isMatch = await bcrypt.compare(contrasena, usuario.contrasena);
        if (!isMatch) {
            return res.status(400).json({ message: 'Contraseña incorrecta' });
        }

        // Extrae los roles del usuario
        const roles = usuario.roles.map((rol) => rol.nombreRol);

        // Genera un token JWT
        const token = jwt.sign(
            { id: usuario._id, correo: usuario.correo, roles },
            process.env.JWT_SECRET,
            { expiresIn: '12h' }
        );

        console.log('Token generado:', token);
        return res.json({ token });
    } catch (error) {
        console.error('Error en el proceso de autenticación:', error);
        return res.status(500).json({ message: 'Error en el servidor' });
    }
};

module.exports = { login };








