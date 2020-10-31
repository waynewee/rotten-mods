import { InvalidParameterError } from "../errors"
import { requireParam } from "../helpers/require-param"
import { capitalize, upperCase } from "../helpers/string-methods"
import {
  validateAcadYear,
  validateModId,
  validateSemester,
  validateUserId
} from '../validators'

export default async function makeReview(reviewInfo: any){

  const transformed = transform(reviewInfo)
  const validated = await validate(transformed)
  const normalized = normalize(validated)

  return normalized

}

function transform(reviewInfo: any){
  return reviewInfo
}

async function validate(reviewInfo: any){

  const {
    userId, 
    modId,
    semesterTaken,
    acadYearTaken
  } = reviewInfo

  requireParam(userId, 'userId')
  requireParam(modId, 'modId')

  await validateUserId(userId)
  await validateModId(modId)
  await validateSemester(semesterTaken)
  await validateAcadYear(acadYearTaken)

  return reviewInfo

}

function normalize(reviewInfo: any){
  return reviewInfo
}