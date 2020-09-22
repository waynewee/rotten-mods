import { createSchema, Type, typedModel, ExtractDoc } from 'ts-mongoose';

export const CourseSchema = createSchema({
  title: Type.string({ required: true })
},{
  timestamps: true
})

export type CourseDoc = ExtractDoc<typeof CourseSchema> 

const Course = typedModel('Course', CourseSchema);

export default Course