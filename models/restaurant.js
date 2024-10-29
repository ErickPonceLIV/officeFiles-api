import mongoose from 'mongoose'

const restaurantSchema = new mongoose.Schema({
  address: {
    building: { type: String, required: true },
    coord: {
      type: [Number],
      required: true,
      validate: {
        validator: function (v) {
          return v.length === 2 // Se espera un array con exactamente dos elementos
        },
        message: props => `${props.value} no es un conjunto válido de coordenadas`
      }
    },
    street: { type: String, required: true },
    zipcode: { type: String }
  },
  borough: { type: String, required: true },
  cuisine: { type: String, required: true },
  grades: [
    {
      date: { type: Date, required: true },
      grade: { type: String, required: true },
      score: { type: Number, required: true }
    }
  ],
  name: { type: String, required: true },
  restaurant_id: { type: String, unique: true, required: true }
})

const restaurant = mongoose.model('restaurant', restaurantSchema)

export default restaurant
