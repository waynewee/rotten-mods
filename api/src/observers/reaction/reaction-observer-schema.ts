const mongoose = require('mongoose')

export const ReactionPropSchema = new mongoose.Schema({
  count: {type: Number, default: 0}
})

export const ReactionObjSchema = new mongoose.Schema({
  like: ReactionPropSchema,
  dislike: ReactionPropSchema,
  love: ReactionPropSchema
})
