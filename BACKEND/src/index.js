import express from "express";
import comentariosRoutes from "./routes/comentarios.js";
import clientesRoutes from "./routes/clientes.js";
import swaggerJSDOCs from "./swagger.js";
import cors from "cors";
import conectarDB from "./config/conexion.js";
import dotenv from "dotenv";


dotenv.config();

const app = express();

// Configurar CORS antes de las rutas
app.use(cors());

// Configurar Express para recibir JSON
app.use(express.json());

// Conectar a la base de datos
conectarDB();

// Definir rutas
app.use("/api", comentariosRoutes);
app.use("/api", clientesRoutes);

app.get("/", (req, res) => {
    res.send("<h1>Bienvenido a la API de SGIR</h1>");
});

// Iniciar el servidor
const port = process.env.PORT || 9001;
app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
    swaggerJSDOCs(app, port);
});


