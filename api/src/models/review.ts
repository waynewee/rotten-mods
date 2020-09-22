import { createSchema, Type, typedModel, ExtractDoc } from 'ts-mongoose';

import * as validators from '../helpers/validators' 

export const ReviewSchema = createSchema({
  userId: Type.objectId({ required: true }),
  text: Type.string({ required: true, validate: validators.validateString })
},{
  timestamps: true
})

export type ReviewDoc = ExtractDoc<typeof ReviewSchema> 

const Review = typedModel('Review', ReviewSchema);

export default Review