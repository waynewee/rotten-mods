const mongoose = require('mongoose')

import {RatingObjSchema} from '../observers/rating/rating-observer-schema'
import { EventObjSchema } from '../observers/event/event-observer-schema'
import { ReactionObjSchema } from "../observers/reaction/reaction-observer-schema"

const SchoolSchema = new mongoose.Schema({
  name: { type: String, required: true },
  shortName: { type: String, required: true },
  rating: RatingObjSchema,
  event: EventObjSchema,
  reaction: ReactionObjSchema
},{
  timestamps: true,
  usePushEach: true
})

const School = mongoose.model('school', SchoolSchema)

export default School