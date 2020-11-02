import { EventObjSchema } from "../observers/event/event-observer-schema";
import { RatingObjSchema } from "../observers/rating/rating-observer-schema";
import { ReactionObjSchema } from "../observers/reaction/reaction-observer-schema"

const mongoose = require('mongoose')

const ModSchema = new mongoose.Schema({
  code: { type: String, required: true },
  schoolId: { type: String },
  title: { type: String, required: true },
  acadYear: { type: String },
  semester: [ Number ],
  description: { type: String },
  credit: {type: Number},
  workload: {type: Number},
  rating: RatingObjSchema,
  event: EventObjSchema,
  reaction: ReactionObjSchema,
  prereqs: [ String ]
},{
  timestamps: true,
  usePushEach: true
})

const Mod = mongoose.model('mod', ModSchema)

export default Mod