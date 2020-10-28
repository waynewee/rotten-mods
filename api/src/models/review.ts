import { createSchema, Type, typedModel, ExtractDoc } from 'ts-mongoose';

import { validateString } from '../helpers/validators' 
import { EventObjSchema } from '../publishers/event/eventPubSchema'
import {RatingObjSchema} from '../publishers/rating/ratingPubSchema'
import { acadSemType } from './types';

export const ReviewSchema = createSchema({
  userId: Type.objectId({ required: true }),
  text: Type.string({ required: true, validate: validateString }),
  modId: Type.objectId({ required: true}),
  acadYearTaken: Type.string(),
  semesterTaken: acadSemType,
  event: EventObjSchema,
  rating: RatingObjSchema,
},{
  timestamps: true
})

export type ReviewDoc = ExtractDoc<typeof ReviewSchema> 

const Review = typedModel('Review', ReviewSchema);

export default Review