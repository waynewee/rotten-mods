import { InvalidParameterError } from "../errors"
import { requireParam } from "../helpers/require-param"
import { capitalize, upperCase } from "../helpers/string-methods"
import {
  validateAcadYear,
  validateSchoolId, 
  validateSemester
} from '../validators'

export default async function makeMod(modInfo: any){

  const transformed = transform(modInfo)
  const validated = await validate(transformed)
  const normalized = normalize(validated)

  return normalized

}

function transform(modInfo: any){
  return modInfo
}

async function validate(modInfo: any){

  const {
    code, 
    title,
    schoolId,
    acadYear,
    semester,
    ...otherInfo
  } = modInfo

  requireParam(code, 'code')
  requireParam(title, 'title')
  validateSemester(semester)
  validateAcadYear(acadYear)
  await validateSchoolId(schoolId)

  return modInfo 

}

function normalize(modInfo: any){

  const {
    code, 
    title,
    ...otherInfo
  } = modInfo

  return {
    code: upperCase(code),
    title: capitalize(title),
    ...otherInfo
  }

}