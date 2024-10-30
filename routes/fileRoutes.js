// importamos express con ESM
import express from 'express'
import * as fileController from '../controllers/filesController.js'

// Hago mi constante para manejar las rutas
const fileRoutes = express.Router()

// Defino las rutas
fileRoutes.post('/files', fileController.createFile)

export default fileRoutes
