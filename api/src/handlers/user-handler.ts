
import makeUser from '../makers/user-maker'
import User from '../models/user'
import { ObjectNotFoundError } from '../errors'
import makeSearchQuery from '../makers/search-maker'

  
export async function findById(id: string){
    
  const user = await User.findById(id)

  if(!user){
    throw new ObjectNotFoundError('User')
  }

  return user

}

export async function update(id: string, userInfo: any){
  const existingUser = await User.findOne({ _id: id })

  if( !existingUser ){
    throw new ObjectNotFoundError('User')
  }

  const user = await makeUser({
    ...existingUser._doc,
    ...userInfo
  })

  const result = await User.updateOne({_id: id}, user)

  return result
}

export async function create(userInfo: any){

  const user = await makeUser(userInfo)
  const newUser = new User(user)
  return newUser.save()

}

export async function remove(id: string){
  const result = await User.deleteOne({_id: id})

  if( result.n === 0 ){
    throw new ObjectNotFoundError("User")
  }

  return result
}

export async function search(searchInfo: any){

  const searchQuery = await makeSearchQuery(searchInfo)

  const { limit, page, searchTerm } = searchQuery

  const results = await User.find({
    $or: [
      { title: { $regex: searchTerm, $options: 'i' } },
      { code: { $regex: searchTerm, $options: 'i' } }
    ]
  })
  .limit(limit) 
  .skip((page - 1) * limit)

  return results
}