import makeMod from '../makers/mod-maker'
import Mod from '../models/mod'
import { ObjectNotFoundError } from '../errors'
import makeSearch from '../makers/search-maker'

export default class ModHandler {

  static async findById(id: string){
      
    const mod = await Mod.findById(id)

    if(!mod){
      throw new ObjectNotFoundError('Mod')
    }

    return mod

  }

  static async update(id: string, modInfo: any){
    const existingMod = await Mod.findOne({ _id: id })

    if( !existingMod){
      throw new ObjectNotFoundError('Mod')
    }

    const mod = await makeMod({
      ...existingMod._doc,
      ...modInfo
    })
    const result = await Mod.updateOne({_id: id}, mod)

    return result
  }

  static async create(modInfo: any){

    const mod = await makeMod(modInfo)
    const newMod = new Mod(mod)
    return newMod.save()

  }

  static async remove(id: string){
    const result = await Mod.deleteOne({_id: id})

    if( result.n === 0 ){
      throw new ObjectNotFoundError("Mod")
    }

    return result
  }

  static async search(searchInfo: any){

    const search = await makeSearch(searchInfo)

    const { limit, page, searchTerm } = search

    const results = await Mod.find({
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