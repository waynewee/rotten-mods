import { createSchema, Type, typedModel, ExtractDoc } from 'ts-mongoose';

export const SchoolSchema = createSchema({
  name: Type.string({ required: true })
},{
  timestamps: true
})

export type SchoolDoc = ExtractDoc<typeof SchoolSchema> 

const School = typedModel('School', SchoolSchema);

export default School