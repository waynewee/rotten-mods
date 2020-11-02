import { requireParam } from "../helpers/require-param"

import {
  validateId,
  validateRatingValue,
  validateType,
  validateUserId
} from '../validators'


const allowedTypes = ["difficulty", "star"]

export default async function makeRating(ratingInfo: any){

  const validated = await validate(ratingInfo)
  const transformed = await transform(validated)
  const normalized = normalize(transformed)

  return normalized

}

function transform(ratingInfo: any){
  return ratingInfo
}

async function validate(ratingInfo: any){

  const {
    userId, 
    sub,
    subId,
    type,
    value
  } = ratingInfo

  requireParam(userId, 'userId')
  requireParam(sub, 'sub')
  requireParam(subId, 'subId')
  requireParam(type, 'type')
  requireParam(value, 'value')

  await validateType(type, allowedTypes)
  await validateUserId(userId)
  await validateId(sub, subId)
  await validateRatingValue(value)
  
  return ratingInfo

}

function normalize(ratingInfo: any){
  return ratingInfo
}