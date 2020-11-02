import User from '../models/user'

export async function getUsersByIds(userIds: any){

  if( userIds.length == 0 ){
    return []
  }

  const users = await User.find({
    $or: userIds.map( (userId:any) => ({ _id: userId }))
  })

  return users

}