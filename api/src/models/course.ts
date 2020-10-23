import { createSchema, Type, typedModel, ExtractDoc } from 'ts-mongoose';

import { RatingObjSchema} from '../publishers/rating/ratingPubSchema'
import { EventObjSchema } from '../publishers/event/eventPubSchema'

export const CourseSchema = createSchema({
  name: Type.string({ required: true }),
  rating: RatingObjSchema,
  event: EventObjSchema
},{
  timestamps: true
})

export type CourseDoc = ExtractDoc<typeof CourseSchema> 

const Course = typedModel('Course', CourseSchema);

export default Course