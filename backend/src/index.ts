// Importar Express
import express from "express";
// Importar las rutas del servidor
import router from "./routes/route";
// Importar la funcion para crear la base de datos
import createTables from "./db/schema";

// Inicializar la aplicación Express
const app = express();

// Middleware para parsear el cuerpo (req.body) de las solicitudes a JSON
app.use(express.json());
// Utilizo el router donde se manejan las rutas y defino cual es el punto de entrada ("/api/v1")
app.use("/api/v1", router);

// Definir el puerto para el servidor
const PORT = process.env.PORT || 8000;

createTables()
    // * Tablas creadas con exito
    .then(() => {
        console.log("Conexion establecida. Tablas creadas o existentes");
        // Iniciar el servidor
        app.listen(PORT, () => {
            console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
        });
    })

    // * Error al crear las tablas
    .catch((error: Error) => {
        console.error("Error al crear las tablas:", error);
    });


