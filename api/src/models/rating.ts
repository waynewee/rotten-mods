import { Types } from 'mongoose';
import { createSchema, Type, typedModel, ExtractDoc } from 'ts-mongoose';

export enum ratingTypesEnum {
  difficulty = 'difficulty',
  star = 'star'
}

const ratingTypes = [ ratingTypesEnum.difficulty ]

export const RatingSchema = createSchema({

  userId: Type.objectId({ required: true }),
  type: Type.string({ required: true, enum: ratingTypes }),
  value: Type.number({ required: true, max: 5, min: 0 }),
  modId: Type.objectId()

},{
  timestamps: true
})

export type RatingDoc = ExtractDoc<typeof RatingSchema> 

const Rating = typedModel('Rating', RatingSchema);

export default Rating