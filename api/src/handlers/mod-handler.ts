import makeMod from '../makers/mod-maker'
import Mod from '../models/mod'
import { ObjectNotFoundError } from '../errors'
import makeSearchQuery from '../makers/search-maker'

export async function findById(id: string){
    
  const mod = await Mod.findById(id)

  if(!mod){
    throw new ObjectNotFoundError('Mod')
  }

  return mod

}

export async function update(id: string, modInfo: any){
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

export async function create(modInfo: any){

  const mod = await makeMod(modInfo)
  const newMod = new Mod(mod)
  return newMod.save()

}

export async function remove(id: string){
  const result = await Mod.deleteOne({_id: id})

  if( result.n === 0 ){
    throw new ObjectNotFoundError("Mod")
  }

  return result
}

export async function search(searchInfo: any){

  const searchQuery = await makeSearchQuery(searchInfo)

  const { limit, page, searchTerm } = searchQuery

  //filters
  const { schoolId, semester, credit } = searchQuery

  const query: any = {
    $and: [
      {
        $or: [
          { title: { $regex: searchTerm, $options: 'i' } },
          { code: { $regex: searchTerm, $options: 'i' } }
        ]
      }
    ]
  }

  if( schoolId ){
    query.$and.push({ schoolId })
  }

  if( semester ){
    query.$and.push({ semester: { $elemMatch: { $eq: semester } } })
  }

  if( credit ){
    query.$and.push({ credit })
  }

  const results = await Mod.find(query)
  .limit(limit) 
  .skip((page - 1) * limit)
  .sort({ "rating.star.value": -1 })

  return results
}