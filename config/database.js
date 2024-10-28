// importamos mongoose con EMS
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config() // leer las variables de entorno

const connectDB = async () => {
  try {
    mongoose.connect(process.env.DB_CONNECT_URI) // Nos conecta a la base de datos
    const { connection } = await mongoose // traemos la conexión de mongoose
    connection.once('open', () => { console.log('Base de datos conectada ✅ ') })
    connection.once('error', (error) => { console.log('‼️ error de conexión a la base de datos', error) })
  } catch (error) {
    console.log('❌ error de conexión a la base de datos', error)
  }
}

export { connectDB }
