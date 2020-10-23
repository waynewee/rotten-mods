import { createSchema, Type, typedModel, ExtractDoc } from 'ts-mongoose';

import { validateString } from '../helpers/validators' 

export const ReviewSchema = createSchema({
  userId: Type.objectId({ required: true }),
  text: Type.string({ required: true, validate: validateString }),
  modId: Type.objectId({ required: true}),
  semesterTaken: Type.number(),
  workload: Type.number(),
  yearTaken: Type.number()
},{
  timestamps: true
})

export type ReviewDoc = ExtractDoc<typeof ReviewSchema> 

const Review = typedModel('Review', ReviewSchema);

export default Review