const mongoose = require('mongoose')

export const RatingPropSchema = new mongoose.Schema({
  count: {type: Number, default: 0},
  value: { type: Number, min: 1, max: 5 }
})

export const RatingObjSchema = new mongoose.Schema({
  difficulty: RatingPropSchema,
  star : RatingPropSchema
})
