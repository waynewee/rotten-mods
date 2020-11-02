import { InvalidParameterError, ObjectNotFoundError } from "../errors"
import School from '../models/school'
import User from '../models/user'
import Mod from '../models/mod'
import Course from '../models/course'
import Reply from '../models/reply'
import Review from '../models/review'

export function validateSemester(semester: number){

  if( !semester ){ return }

  if( semester < 1 || semester > 8 ){
    throw new InvalidParameterError('semester', 'Expected range from 1 - 8')
  }
  
}

export async function validateModId(modId: string){

  if( !modId ){
    return
  }

  console.log(modId)

  const mod = await Mod.findById(modId)

  if( !mod ){
    throw new ObjectNotFoundError("Mod")
  }

}

export async function validateReviewId(reviewId: string){

  if( !reviewId ){
    return
  }

  console.log(reviewId)

  const review = await Review.findById(reviewId)

  if( !review ){
    throw new ObjectNotFoundError("Review")
  }

}

export async function validateReplyId(replyId: string){

  if( !replyId ){
    return
  }

  console.log(replyId)

  const reply = await Reply.findById(replyId)

  if( !reply ){
    throw new ObjectNotFoundError("Reply")
  }

}

export async function validateCourseId(courseId: string){
  if( !courseId){
    return 
  }

  const course = await Course.findById(courseId)

  if(!course){
    throw new ObjectNotFoundError("Course")
  }
}

export async function validateEmailExists(email: string){
  if( !email ){ return }

  const user = await User.findOne({ email })

  if( !user ){
    throw new ObjectNotFoundError("User Email")
  }

}

export function validateEmail(email: string){

  if( !email ){
    return
  }

  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.+-]+\.edu$/

  if( !regex.test(email)){
    throw new InvalidParameterError("Email", "Must be an email address from an education institute e.g. email@xx.edu")
  }
}

export async function validateUserId(userId: string){

  if( !userId ){
    return
  }

  const user = await User.findById(userId)

  if( !user ){
    throw new ObjectNotFoundError("User")
  }

}


export async function validateSchoolId(schoolId: string){

  if( !schoolId ){
    return
  }

  const school = await School.findById(schoolId)

  if( !school ){
    throw new ObjectNotFoundError("School")
  }

}

export function validateAcadYear(acadYear: string){

  if( !acadYear){
    return
  }

  const regex = /[0-9]{2}\/[0-9]{2}/

  if( !regex.test(acadYear)){
    throw new InvalidParameterError("AcadYear", "Expected format YY/YY")
  }

}

export function validatePage(page: number){

  if( !page){
    return
  }

  if( isNaN(page) || page < 1 ){
    throw new InvalidParameterError("Page", "Must be a number at least 1")
  }
}

export function validateLimit(limit: number){

  if( !limit ){
    return
  }

  if(isNaN(limit) || limit > 500 || limit < 1 ){
    throw new InvalidParameterError("Limit", "Must be a number between 1 and 500")
  }
}

export function validateDate(date: string){

  if( !date ){ return }
  
  if( isNaN(Date.parse(date))){
    throw new InvalidParameterError("Date", "Must be valid date string")
  }
}

export function validateSchoolYear(year: number){
  if( !year ){ return }
  if( isNaN(year) || year < 1 || year > 8 ){
    throw new InvalidParameterError("School Year", "Must be a number between 1 and 8")
  }
}

export function validateType(type: string, allowedTypes: any){
  if( !allowedTypes.includes(type)){
    throw new InvalidParameterError("Invalid Type", `Allowed Types: ${allowedTypes.reduce(
      (acc: any, curr: any, index: number) => { 
        
        acc += curr
        
        if( index < allowedTypes.length - 1){
          acc += ", "          
        }

        return acc
      },"")}`)
  }
}

export async function validateId(name: string, id: string){

  if( !name || !id){
    return 
  }

  switch(name){
    case 'mod':
      await validateModId(id)
      break
    case 'course':
      await validateCourseId(id)
      break
    case 'review':
      // await validateReviewId(id)
      break
    case 'school':
      await validateSchoolId(id)
      break
    default:
      throw new InvalidParameterError("Invalid Id")
  }
}

export function validateRatingValue(value: number){
  if(!value){
    return 
  }

  if( value < 1 || value > 5 ){
    throw new InvalidParameterError("Invalid rating", "Rating must be between 1 and 5")
  }
}