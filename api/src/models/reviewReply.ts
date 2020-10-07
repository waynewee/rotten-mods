import { createSchema, Type, typedModel, ExtractDoc } from 'ts-mongoose';

import * as validators from '../helpers/validators' 

export const ReviewReplySchema = createSchema({
  text: Type.string({ required: true, validate: validators.validateString }),
  reviewId: Type.objectId({ required: true}),
  userId: Type.objectId({ required: true })
},{
  timestamps: true
})

export type ReviewReplyDoc = ExtractDoc<typeof ReviewReplySchema> 

const ReviewReply = typedModel('ReviewReply', ReviewReplySchema);

export default ReviewReply