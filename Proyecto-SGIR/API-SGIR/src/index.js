import express from "express";
import contactosRoutes from "./routes/contactos.js"
import reservasRoutes from "./routes/reservas.js";
import paqueteRoutes from "./routes/paquete.js";
import adminRoutes from "./routes/admins.js";
import hotelsRoutes from "./routes/hotels.js";
import comentarioRoutes from "./routes/comentarios.js";
import excursionesRoutes from "./routes/excursiones.js";
import port from "./config/config.js";
import swaggerJSDOCs from "./swaggerConfig.js";
import cors from "cors";
import clientesRoutes from "./routes/clientes.js"
const app = express(); // Definir 'app' antes de usarlo

// Ahora puedes usar 'app' para los middlewares
app.use(express.json()); // Middleware para manejar JSON (Express ya lo tiene)
app.use(express.urlencoded({ extended: true })); // Si necesitas manejar formularios con URL-encoded
app.use(cors()); // Habilitar CORS

// Rutas para la API
app.use("/api", reservasRoutes);
app.use("/api", hotelsRoutes);
app.use("/api", paqueteRoutes);
app.use("/api", adminRoutes);
app.use("/api", comentarioRoutes);
app.use("/api", excursionesRoutes);
app.use("/api", clientesRoutes);
app.use("/api", contactosRoutes);


// Ruta de bienvenida
app.get("/", (req, res) => {
    res.send("<h1>Bienvenido a la API de SGIR</h1>");
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
    swaggerJSDOCs(app, 7700); // Opcional: configurar swagger
});