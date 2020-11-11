const mongoose = require('mongoose')
import { EventObjSchema } from '../observers/event/event-observer-schema'
import {RatingObjSchema} from '../observers/rating/rating-observer-schema'
import { ReactionObjSchema } from '../observers/reaction/reaction-observer-schema'

const ReviewSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  text: { type: String, required: true },
  modId: { type: String, required: true },
  acadYearTaken: { type: String },
  semesterTaken: { type: Number},
  event: EventObjSchema,
  reaction: ReactionObjSchema,
  ratingIds: [String]
},{
  usePushEach: true,
  timestamps: true
})

const Review = mongoose.model('review', ReviewSchema)

export default Review