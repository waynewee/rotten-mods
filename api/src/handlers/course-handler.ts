
import makeCourse from '../makers/course-maker'
import Course from '../models/course'
import { ObjectNotFoundError } from '../errors'
import makeSearch from '../makers/search-maker'

export default class CourseHandler {

  static async findById(id: string){
      
    const course = await Course.findById(id)

    if(!course){
      throw new ObjectNotFoundError('Course')
    }

    return course

  }

  static async update(id: string, courseInfo: any){
    const existingCourse = await Course.findOne({ _id: id })

    if( !existingCourse ){
      throw new ObjectNotFoundError('Course')
    }

    const course = await makeCourse({
      ...existingCourse._doc,
      ...courseInfo
    })

    const result = await Course.updateOne({_id: id}, course)

    return result
  }

  static async create(courseInfo: any){

    const course = await makeCourse(courseInfo)
    const newCourse = new Course(course)
    return newCourse.save()

  }

  static async remove(id: string){
    const result = await Course.deleteOne({_id: id})

    if( result.n === 0 ){
      throw new ObjectNotFoundError("Course")
    }

    return result
  }

  static async search(searchInfo: any){

    const search = await makeSearch(searchInfo)

    const { limit, page, searchTerm } = search

    const results = await Course.find({
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