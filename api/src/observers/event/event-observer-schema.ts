const mongoose = require('mongoose')

export const EventPropSchema = new mongoose.Schema({
  count: { type: Number, default: 0}
})

export const EventObjSchema = new mongoose.Schema({
  click: EventPropSchema,
  view: EventPropSchema
})
