import { requireParam } from "../helpers/require-param"

import {
  validateId,
  validateType,
  validateUserId
} from '../validators'


const allowedTypes = ["like", "love", "dislike"]

export default async function makeReaction(reactionInfo: any){

  const transformed = transform(reactionInfo)
  const validated = await validate(transformed)
  const normalized = normalize(validated)

  return normalized

}

function transform(reactionInfo: any){
  return reactionInfo
}

async function validate(reactionInfo: any){

  const {
    userId, 
    sub,
    subId,
    type
  } = reactionInfo

  requireParam(userId, 'userId')
  requireParam(sub, 'sub')
  requireParam(subId, 'subId')
  requireParam(type, 'type')

  await validateType(type, allowedTypes)
  await validateUserId(userId)
  await validateId(sub, subId)
  
  return reactionInfo

}

function normalize(reactionInfo: any){
  return reactionInfo
}