import { Router } from "express";


const router = Router();

router.get(`/`, (_, res) => {
    res.send({
        backendMessage: '¡Hola Mundo con Node.js y Express!'
    })
})

// Ruta para obtener información de los usuarios
router.get(`/user`, (_req, res) => {
    
})

export default router;