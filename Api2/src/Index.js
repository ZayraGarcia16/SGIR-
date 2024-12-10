import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import paqueteRouter from './rutas/paquete.js';
import adminRouter from './rutas/admins.js';
import bodyParser from "body-parser";
import cors from "cors"

dotenv.config();

const app = express();
app.use(express.json());

app.use(bodyParser.urlencoded({extended:true}));
app.use(cors()); 

app.use("/api", adminRouter);
app.use("/api", paqueteRouter);


mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Conectado a MongoDB');
  })
  .catch((error) => {
    console.error(`Error al conectarse a MongoDB: ${error.message}`);
  });

app.use('/api/paquete', paqueteRouter);
app.use('/api/admin', adminRouter);

const port = process.env.PORT || 7700;

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`)
});
