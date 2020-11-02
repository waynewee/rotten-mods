const mongoose = require('mongoose')

const RatingSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  subId: { type: String, required: true },
  sub: { type: String, required: true },
  type: { type: String, required: true },
  value: { type: Number, required: true }
})

const Rating = mongoose.model('rating', RatingSchema)

export default Rating