import { createSchema, Type, typedModel, ExtractDoc } from 'ts-mongoose';
import { ratingSubTypes } from '../publishers/rating/ratingPub'

export enum ratingTypesEnum {
  difficulty = 'difficulty',
  star = 'star'
}

const ratingTypes = [ ratingTypesEnum.difficulty, ratingTypesEnum.star ]

export const RatingSchema = createSchema({
  userId: Type.objectId({ required: true }),
  type: Type.string({ required: true, enum: ratingTypes }),
  value: Type.number({ required: true, max: 5, min: 0 }),
  sub: Type.string({ required: true, enum: ratingSubTypes}),
  subId: Type.objectId({ required: true })
},{
  timestamps: true
})

export type RatingDoc = ExtractDoc<typeof RatingSchema> 

const Rating = typedModel('Rating', RatingSchema);

export default Rating