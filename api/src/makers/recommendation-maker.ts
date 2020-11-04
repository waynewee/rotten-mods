import { requireParam } from "../helpers/require-param"

import {
  validateType,
  validateUserId
} from '../validators'

const allowedTypes = ['most-rated', 'most-viewed', 'top-rated', 'similarity']

export default async function makeRecommendationQuery(recommendationInfo: any){

  const validated = await validate(recommendationInfo)
  const transformed = await transform(validated)
  const normalized = normalize(transformed)

  return normalized

}

function transform(recommendationInfo: any){
  return recommendationInfo
}

async function validate(recommendationInfo: any){

  const {
    userId, 
    type
  } = recommendationInfo

  requireParam(type, 'type')

  await validateType(type, allowedTypes)
  await validateUserId(userId)
  
  return recommendationInfo

}

function normalize(recommendationInfo: any){
  return recommendationInfo
}