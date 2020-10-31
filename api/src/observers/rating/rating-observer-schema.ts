import { createSchema, Type } from 'ts-mongoose';
//all observers must use this schema
export const RatingPropSchema = createSchema({
  count: Type.number({default: 0}),
  value: Type.number({default: 0, min: 0, max: 5})
})

export const RatingObjSchema = createSchema({
  difficulty: RatingPropSchema,
  star : RatingPropSchema
})
