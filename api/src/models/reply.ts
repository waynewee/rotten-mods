import { createSchema, Type, typedModel, ExtractDoc } from 'ts-mongoose';
import { validateString } from '../helpers/validators';
import { EventObjSchema } from '../publishers/event/eventPubSchema';

export const ReplySchema = createSchema({
  userId: Type.objectId({ required: true }),
  text: Type.string({ required: true, validate: validateString }),
  reviewId: Type.objectId({ required: true }),
  replyId: Type.objectId(),
  event: EventObjSchema
},{
  timestamps: true
})

export type ReplyDoc = ExtractDoc<typeof ReplySchema> 

const Reply = typedModel('Reply', ReplySchema);

export default Reply