import { createSchema, Type, typedModel, ExtractDoc } from 'ts-mongoose';

export const SavedModsListSchema = createSchema({
  modIds:[Type.objectId()],
  userId: Type.objectId({ required: true })
},{
  timestamps: true
})

export type SavedModsListDoc = ExtractDoc<typeof SavedModsListSchema> 

const SavedModsList = typedModel('SavedModsList', SavedModsListSchema);

export default SavedModsList