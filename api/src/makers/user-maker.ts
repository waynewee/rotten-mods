import { hash } from "../helpers/hash"
import { requireParam } from "../helpers/require-param"
import { lowerCase } from "../helpers/string-methods"
import {
  validateEmail, 
  validateSchoolId, 
  validateDate, 
  validateSchoolYear,
  validateCourseId
} from '../validators'

export default async function makeUser(userInfo: any){

  const transformed = await transform(userInfo)
  console.log(transformed)
  const validated = await validate(transformed)
  const normalized = normalize(validated)

  return normalized

}

async function transform(userInfo: any){

  const { 
    password,
    ...otherInfo
  } = userInfo

  const hashedPassword = await hash(password)

  return {
    password: hashedPassword,
    ...otherInfo
  }

}

async function validate(userInfo: any){

  const {
    name, 
    email,
    password,
    schoolStartDate,
    schoolId,
    courseId,
    currentYear
  } = userInfo

  requireParam(name, 'name')
  requireParam(email, 'email')
  requireParam(password, 'password')
  validateEmail(email)
  await validateSchoolId(schoolId)
  await validateCourseId(courseId)
  validateDate(schoolStartDate)
  validateSchoolYear(currentYear)

  return userInfo 

}

function normalize(userInfo: any){

  const {
    email,
    ...otherInfo
  } = userInfo

  return {
    email: lowerCase(email),
    ...otherInfo
  }
}