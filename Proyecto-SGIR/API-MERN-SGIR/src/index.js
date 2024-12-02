import express from "express";
import reservaRoutes from "./routes/reservas.js";
import paqueteRoutes from "./routes/paquete.js";
import adminRoutes from "./routes/reservas.js";
import hotelRoutes from "./routes/hotels.js";
import contactosRoutes from "./routes/contactos.js";
import excursionesRoutes from "./routes/excursiones.js";
import port from "./config/config.js";
import swaggerJSDOCs from "./swaggerConfig.js";
import cors from "cors";

const app = express(); // Definir 'app' antes de usarlo

// Ahora puedes usar 'app' para los middlewares
app.use(express.json()); // Middleware para manejar JSON (Express ya lo tiene)
app.use(express.urlencoded({ extended: true })); // Si necesitas manejar formularios con URL-encoded
app.use(cors()); // Habilitar CORS

// Rutas para la API
app.use("/api", reservaRoutes);
app.use("/api", hotelRoutes);
app.use("/api", paqueteRoutes);
app.use("/api", adminRoutes);
app.use("/api", contactosRoutes);
app.use("/api", excursionesRoutes);

// Ruta de bienvenida
app.get("/", (req, res) => {
    res.send("<h1>Bienvenido a la API de SGIR</h1>");
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
    swaggerJSDOCs(app, 7700); // Opcional: configurar swagger
});