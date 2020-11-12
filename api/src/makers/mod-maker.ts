import { InvalidParameterError } from "../errors"
import { requireParam } from "../helpers/require-param"
import { capitalize, upperCase } from "../helpers/string-methods"
import {
  validateAcadYear,
  validateDuplicateMod,
  validateSchoolId, 
  validateSemester,
  validateSemesters
} from '../validators'

export default async function makeMod(modInfo: any){

  const validated = await validate(modInfo)
  const transformed = await transform(validated)
  const normalized = normalize(transformed)

  await validateDuplicateMod(normalized.title, normalized.code)

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
  validateSemesters(semester)
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