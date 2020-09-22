import { createSchema, Type, typedModel, ExtractDoc } from 'ts-mongoose';

export interface IUser extends Document {
  name: string;
}

export const UserSchema = createSchema({
  name: Type.string({ required: true })
},{
  timestamps: true
})

export type UserDoc = ExtractDoc<typeof UserSchema> 

const User = typedModel('User', UserSchema, undefined, undefined, {

  testMethod: function(name: string): void {
    return;
  }

});

export default User