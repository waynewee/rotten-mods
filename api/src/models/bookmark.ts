import { createSchema, Type, typedModel, ExtractDoc } from 'ts-mongoose';

export const BookMarkSchema = createSchema({
  modId: Type.objectId(),
  userId: Type.objectId()
},{
  timestamps: true
})

export type BookMarkDoc = ExtractDoc<typeof BookMarkSchema> 

const BookMark = typedModel('BookMark', BookMarkSchema);

export default BookMark