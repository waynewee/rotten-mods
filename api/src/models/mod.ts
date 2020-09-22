import { createSchema, Type, typedModel, ExtractDoc } from 'ts-mongoose';

export const ModSchema = createSchema({
  code: Type.string({ required: true }),
  title: Type.string({required: true }),
  description: Type.string({})
},{
  timestamps: true
})

export type ModDoc = ExtractDoc<typeof ModSchema> 

const Mod = typedModel('Mod', ModSchema);

export default Mod