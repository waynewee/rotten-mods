import { createSchema, Type, typedModel, ExtractDoc } from 'ts-mongoose';

import { validateEmail } from '../helpers/validators'

export const UserSchema = createSchema({
  name: Type.string(),
  email: Type.string({ required: true, unique: true, validate: validateEmail }),
  password: Type.string({ required: true }),
  schoolStartDate: Type.date(),
  schoolId: Type.objectId(),
  courseId: Type.objectId(),
  currentYear: Type.number({ min: 1, max: 8})
},{
  timestamps: true
})

export type UserDoc = ExtractDoc<typeof UserSchema> 

const User = typedModel('User', UserSchema);

export default User