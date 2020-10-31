import { createSchema, Type } from 'ts-mongoose';
//all observers must use this schema
export const EventPropSchema = createSchema({
  count: Type.number({default: 0})
})

export const EventObjSchema = createSchema({
  click: EventPropSchema,
  view: EventPropSchema
})
