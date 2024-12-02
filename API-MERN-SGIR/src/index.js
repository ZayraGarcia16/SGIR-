import express from "express";
import reservaRoutes from "./routes/reservas.js"; 
import hotelRoutes from "./routes/hotels.js"; 
import port from "./config/config.js";
import swaggerJSDOCs from "./swaggerConfig.js";
import cors from "cors";
import bodyParser from "body-parser";

const app = express(); // Definir 'app' antes de usarlo

// Ahora puedes usar 'app' para los middlewares
app.use(express.json()); // Middleware para manejar JSON (Express ya lo tiene)
app.use(express.urlencoded({ extended: true })); // Si necesitas manejar formularios con URL-encoded
app.use(cors());
app.use(bodyParser.json)
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors(corsOptions))// Habilitar CORS

var corsOptions ={
    origin:'*',
    method:"GET, POST, OPTIONS, PUT, DELETE",
    optionsSuccessStatus: 200,
}

// Rutas para la API
app.use("/api", reservaRoutes);
app.use("/api", hotelRoutes);

// Ruta de bienvenida
app.get("/", (req, res) => {
    res.send("<h1>Bienvenido a la API de SGIR</h1>");
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
    swaggerJSDOCs(app, 7707); // Opcional: configurar swagger
});