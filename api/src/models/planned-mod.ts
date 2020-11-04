const mongoose = require('mongoose')

export const PlannedModSchema = new mongoose.Schema({
  modId: { type: String, required: true},
  userId: { type: String, required: true },
  semester: { type: Number, min: 1, max: 8 }
},{
  timestamps: true
})

const PlannedMod = mongoose.model('plannedMod', PlannedModSchema)


export default PlannedMod