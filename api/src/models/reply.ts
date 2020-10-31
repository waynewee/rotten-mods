const mongoose = require('mongoose')
import { EventObjSchema } from '../observers/event/event-observer-schema';
import { ReactionObjSchema } from '../observers/reaction/reaction-observer-schema';

const ReplySchema = new mongoose.Schema({
  userId: { type: String, required: true },
  text: { type: String, required: true },
  reviewId: { type: String, required: true },
  replyId: { type: String },
  event: EventObjSchema,
  reaction: ReactionObjSchema
},{
  timestamps: true,
  usePushEach: true
})

const Reply = mongoose.model('reply', ReplySchema)
export default Reply