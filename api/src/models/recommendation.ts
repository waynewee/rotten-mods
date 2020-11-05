const mongoose = require('mongoose')

const RecommendationSchema = new mongoose.Schema({
  userId: { type: String },
  modIds: [ String ],
  type: { type: String, required: true }
},{
  timestamps: true
})

const Recommendation = mongoose.model('recommendation', RecommendationSchema)

export default Recommendation