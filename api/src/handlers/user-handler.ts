
import userValidator from '../makers/user-maker'
import User from '../models/user'
import { ObjectNotFoundError } from '../errors'
import makeSearch from '../makers/search-maker'

export default class UserHandler {
  
  static async findById(id: string){
      
    const user = await User.findById(id)

    if(!user){
      throw new ObjectNotFoundError('User')
    }

    return user

  }

  static async update(id: string, userInfo: any){
    const existingUser = await User.findOne({ _id: id })

    if( !existingUser ){
      throw new ObjectNotFoundError('User')
    }

    const user = await userValidator({
      ...existingUser._doc,
      ...userInfo
    })

    const result = await User.updateOne({_id: id}, user)

    return result
  }

  static async create(userInfo: any){

    const user = await userValidator(userInfo)
    const newUser = new User(user)
    return newUser.save()

  }

  static async remove(id: string){
    const result = await User.deleteOne({_id: id})

    if( result.n === 0 ){
      throw new ObjectNotFoundError("User")
    }

    return result
  }

  static async search(searchInfo: any){

    const search = await makeSearch(searchInfo)

    const { limit, page, searchTerm } = search

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
}