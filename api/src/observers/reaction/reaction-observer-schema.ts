import { createSchema, Type } from 'ts-mongoose';
//all observers must use this schema
export const ReactionPropSchema = createSchema({
  count: Type.number({default: 0})
})

export const ReactionObjSchema = createSchema({
  like: ReactionPropSchema,
  dislike: ReactionPropSchema,
  love: ReactionPropSchema
})
