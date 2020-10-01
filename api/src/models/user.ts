import { createSchema, Type, typedModel, ExtractDoc } from 'ts-mongoose';

export const UserSchema = createSchema({
  name: Type.string(),
  email: Type.string({ required: true, unique: true }),
  password: Type.string({ required: true }),
  schoolStartDate: Type.date(),
  schoolId: Type.objectId(),
  courseId: Type.objectId()
},{
  timestamps: true
})

export type UserDoc = ExtractDoc<typeof UserSchema> 

const User = typedModel('User', UserSchema);

export default User