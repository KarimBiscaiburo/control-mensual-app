// Importar Express
import express from "express";

// Inicializar la aplicación Express
const app = express();

// Middleware para parsear el cuerpo (req.body) de las solicitudes a JSON
app.use(express.json());

// Definir el puerto para el servidor
const PORT = process.env.PORT || 8000;
 
// Ruta principal
app.get('/', (_req, res) => {
    res.send('¡Hola Mundo con Node.js y Express!');
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});