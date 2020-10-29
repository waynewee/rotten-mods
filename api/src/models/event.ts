import { createSchema, Type, typedModel, ExtractDoc } from 'ts-mongoose';
import { eventSubTypes } from '../publishers/event/eventPub'
export enum eventTypesEnum {
  like = 'like',
  view = 'view'
}

const eventTypes = [ eventTypesEnum.like, eventTypesEnum.view ]

export const EventSchema = createSchema({
  userId: Type.objectId({ required: true }),
  subId: Type.objectId({ required: true }),
  sub: Type.string({ required: true, enum: eventSubTypes }),
  type: Type.string({ required:true, enum: eventTypes })
},{
  timestamps: true
})

export type EventDoc = ExtractDoc<typeof EventSchema> 

const Event = typedModel('Event', EventSchema);

export default Event