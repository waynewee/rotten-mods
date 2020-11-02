const mongoose = require('mongoose')

const EventSchema = new mongoose.Schema({
  userId: { type: String, required: false },
  subId: { type: String, required: true },
  sub: { type: String, required: true },
  type: { type: String, required: true }
})

const Event = mongoose.model('event', EventSchema)

export default Event