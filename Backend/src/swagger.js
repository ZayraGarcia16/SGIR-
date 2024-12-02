import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "APIS para el proyecto SGIR ",
            version: "1.0.0",
            description: "Documentacion de la API de excursion y contacto para el proyecto SGIR, conexion a MongoDB",
            contact: {
                name: "API - Excursion",
                url: "",
                email: "",
            },
        },
        servers: [
            {
                url: "http://localhost:4000",
                description: "",
            },
        ],
    },
    apis: ["./src/routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);
const swaggerDocs = (app, port) => {
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    app.get("/api-docs.json", (req, res) => {
        res.setHeader("Content-Type", "application/json");
        res.send(swaggerSpec);
    });
    console.log(`Version No. 1 de la documentacion estara disponible en http://localhost:${port}/api-docs`);  
};

export default swaggerDocs;