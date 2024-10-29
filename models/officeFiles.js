import mongoose from 'mongoose'

const documentSchema = new mongoose.Schema({
  year: { type: String, required: true }, // Se almacena como String ya que podría contener caracteres adicionales en ciertos formatos
  management: { type: String, required: true }, // Se almacena la dirección a la que pertenece el archivo
  directorate: { type: String, required: true }, // Se almacena el departamento donde esta ubicado el archivo
  documentId: { type: String, required: true, unique: true }, // Identificador único para el documento
  name: { type: String, required: true },
  preservation: { type: String, required: true }, // Almacenado como String ya que indica la duración de conservación
  status: [{ type: String }], // Almacena un array de strings para los estados del documento
  file: [{ type: String }] // Almacena un array de strings para clasificaciones de archivo
})

export default mongoose.model('Document', documentSchema)
