
import makeSchool from '../makers/school-maker'
import School from '../models/school'
import { ObjectNotFoundError } from '../errors'
import makeSearch from '../makers/search-maker'

export default class SchoolHandler {

  static async findById(id: string){
      
    const school = await School.findById(id)

    if(!school){
      throw new ObjectNotFoundError('School')
    }

    return school

  }

  static async update(id: string, schoolInfo: any){
    const existingSchool = await School.findOne({ _id: id })

    if( !existingSchool ){
      throw new ObjectNotFoundError('School')
    }

    const school = await makeSchool({
      ...existingSchool._doc,
      ...schoolInfo
    })

    const result = await School.updateOne({_id: id}, school)

    return result
  }

  static async create(schoolInfo: any){

    const school = await makeSchool(schoolInfo)
    const newSchool = new School(school)
    return newSchool.save()

  }

  static async remove(id: string){
    const result = await School.deleteOne({_id: id})

    if( result.n === 0 ){
      throw new ObjectNotFoundError("School")
    }

    return result
  }

  static async search(searchInfo: any){

    const search = await makeSearch(searchInfo)

    const { limit, page, searchTerm } = search

    const results = await School.find({
      $or: [
        { name: { $regex: searchTerm, $options: 'i' } },
        { shortName: { $regex: searchTerm, $options: 'i' } }
      ]
    })
    .limit(limit) 
    .skip((page - 1) * limit)

    return results
  }
  
}