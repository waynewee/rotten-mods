import { UserDoc } from '../models/user'

export function method1(user: UserDoc){
  user.name = "fuck"
  return user.save();
}