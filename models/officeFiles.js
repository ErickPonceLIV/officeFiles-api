import mongoose from 'mongoose'

const FilesSchema = new mongoose.Schema({
  year: { type: String, required: true },
  management: { type: String, required: true },
  directorate: { type: String, required: true },
  documentSerial: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  preservation: { type: String, required: true },
  status: [{ type: String }],
  file: [{ type: String }],
  isActive: { type: Boolean, default: true }, // Indicador de si el documento está activo
  newFile: [{ type: Boolean, required: true }] //
})

const File = mongoose.model('File', FilesSchema)

export default File
