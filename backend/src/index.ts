// Importar Express
import express from "express";

import router from "./routes/route";

// Inicializar la aplicación Express
const app = express();

// Middleware para parsear el cuerpo (req.body) de las solicitudes a JSON
app.use(express.json());
app.use(router)

// Definir el puerto para el servidor
const PORT = process.env.PORT || 8000;

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});