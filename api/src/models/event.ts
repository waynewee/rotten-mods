import { createSchema, Type, typedModel, ExtractDoc } from 'ts-mongoose';

export enum eventTypesEnum {
  likedMod = 'likedMod'
}

const eventTypes = [ eventTypesEnum.likedMod ]

export const EventSchema = createSchema({
  userId: Type.objectId({ required: true }),
  modId: Type.objectId(),
  type: Type.string({ required: true, enum: eventTypes })
},{
  timestamps: true
})

export type EventDoc = ExtractDoc<typeof EventSchema> 

const Event = typedModel('Event', EventSchema);

export default Event