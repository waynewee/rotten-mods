const mongoose = require('mongoose')

import { RatingObjSchema} from '../observers/rating/rating-observer-schema'
import { EventObjSchema } from '../observers/event/event-observer-schema'
import { ReactionObjSchema } from '../observers/reaction/reaction-observer-schema'

export const CourseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  shortName: { type: String, required: true },
  rating: RatingObjSchema,
  event: EventObjSchema,
  reaction: ReactionObjSchema
},{
  timestamps: true,
  usePushEach: true 
})

const Course = mongoose.model('course', CourseSchema)

export default Course