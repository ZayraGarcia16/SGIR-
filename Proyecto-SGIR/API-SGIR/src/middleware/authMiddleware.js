import jwt from 'jsonwebtoken';
import { validatorHandler } from "./validator.handler.js";

// Middleware para verificar el JWT
const verifyJWT = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ message: 'Token no proporcionado' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ message: 'Token expirado' });
        }
        if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({ message: 'Token inválido' });
        }
        return res.status(500).json({ message: 'Error de autenticación' });
    }
};

// Middleware para verificar roles específicos
const verifyRol = (rolesPermitidos) => (req, res, next) => {
    const usuarioRol = req.user?.roles;

    if (!usuarioRol || !Array.isArray(usuarioRol)) {
        return res.status(403).json({ message: 'Acceso denegado: roles no definidos' });
    }

    const hasRol = usuarioRol.some((rol) => rolesPermitidos.includes(rol));

    if (!hasRol) {
        return res.status(403).json({ message: 'Acceso denegado: rol no autorizado' });
    }

    next();
};

export { validatorHandler, verifyJWT, verifyRol };