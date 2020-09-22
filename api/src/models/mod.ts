import { createSchema, Type, typedModel, ExtractDoc } from 'ts-mongoose';

export const ModSchema = createSchema({
  code: Type.string({ required: true }),
  title: Type.string({required: true }),
  acadYear: Type.string(),
  semester: Type.string(),
  faculty: Type.string(),
  department: Type.string(),
  description: Type.string({}),
  crossModule: Type.string(),
  credit: Type.number(),
  workload: Type.number()

},{
  timestamps: true
})

export type ModDoc = ExtractDoc<typeof ModSchema> 

const Mod = typedModel('Mod', ModSchema);

export default Mod