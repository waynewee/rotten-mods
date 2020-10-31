const mongoose = require('mongoose')

const ReactionSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  subId: { type: String, required: true },
  sub: { type: String, required: true },
  type: { type: String, required: true }
})

const Reaction = mongoose.model('reaction', ReactionSchema)

export default Reaction