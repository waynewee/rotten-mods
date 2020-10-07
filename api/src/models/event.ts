import { createSchema, Type, typedModel, ExtractDoc } from 'ts-mongoose';

export enum eventTypesEnum {
  likedMod = 'likedMod',
  viewedMod = 'viewedMod',
  likedReview = 'likedReview',
  likedReply = 'likedReply',
  searched = 'searched'
}

const eventTypes = [ eventTypesEnum.likedMod, eventTypesEnum.viewedMod ]

export const EventSchema = createSchema({
  userId: Type.objectId({ required: true }),
  modId: Type.objectId(),
  type: Type.string({ required: true, enum: eventTypes }),
  searchTerm: Type.string()
},{
  timestamps: true
})

export type EventDoc = ExtractDoc<typeof EventSchema> 

const Event = typedModel('Event', EventSchema);

export default Event