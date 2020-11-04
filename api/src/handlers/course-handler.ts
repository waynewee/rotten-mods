
import makeCourse from '../makers/course-maker'
import Course from '../models/course'
import { ObjectNotFoundError } from '../errors'
import makeSearchQuery from '../makers/search-maker'

export async function findById(id: string){
    
  const course = await Course.findById(id)

  if(!course){
    throw new ObjectNotFoundError('Course')
  }

  return course

}

export async function update(id: string, courseInfo: any){
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

export async function create(courseInfo: any){

  const course = await makeCourse(courseInfo)
  const newCourse = new Course(course)
  return newCourse.save()

}

export async function remove(id: string){
  const result = await Course.deleteOne({_id: id})

  if( result.n === 0 ){
    throw new ObjectNotFoundError("Course")
  }

  return result
}

export async function search(searchInfo: any){

  const searchQuery = await makeSearchQuery(searchInfo)

  const { limit, page, searchTerm } = searchQuery

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