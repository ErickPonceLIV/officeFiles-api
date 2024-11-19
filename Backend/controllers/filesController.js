// importamos el modelo
import File from '../models/officeFiles.js'

// Realizamos las operaciones CRUD

// CREATE
const createFile = async (req, res) => {
  try {
    const file = await File.create(req.body)
    res.status(201).json(file)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

// READ
// Obtener todos los archivos
const getFiles = async (req, res) => {
  try {
    const files = await File.find()
    res.status(200).json(files)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}
// Obtener un archivo por id
const getFileById = async (req, res) => {
  try {
    const file = await File.findById(req.params.id)
    res.status(200).json(file)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

// UPDATE

// DELETE

export { createFile, getFiles, getFileById }
