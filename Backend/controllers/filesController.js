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

// UPDATE

// DELETE

export { createFile }
