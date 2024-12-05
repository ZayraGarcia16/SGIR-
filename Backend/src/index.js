import express from "express";
import excursionRoutes from "./routes/excursiones.js";
import contactoRoutes from "./routes/contactos.js";
import port from "./configuration/conexion.js";
import swaggerDocs from "./swagger.js";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors(corsOptions));
app.use(express.json());
app.use('/api', excursionRoutes);
app.use('/api', contactoRoutes);

var corsOptions = {
    origin: '*',
    method: "GET, POST, OPTIONS, PUT, DELETE",
    optionsSuccessStatus: 200,
}
const clienteOptions = {
    serverApi: {
        version: "1",
        strict: true,
        deprecationErrors: true,
    }
}
app.get("/", (req, res) => {
    res.send("<h2>Bienvenido API de Excursiones </h2>");
});


app.listen(port, () => {
    console.log(`Se esta ejecutando el servidor en el puerto ${port}.`);
    swaggerDocs(app, 7700);
});