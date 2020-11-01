import { requireParam } from "../helpers/require-param"

import {
  validateId,
  validateType,
  validateUserId
} from '../validators'


const allowedTypes = ["click", "view"]

export default async function makeEvent(eventInfo: any){

  const validated = await validate(eventInfo)
  const transformed = await transform(validated)
  const normalized = normalize(transformed)

  return normalized

}

function transform(eventInfo: any){
  return eventInfo
}

async function validate(eventInfo: any){

  const {
    userId, 
    sub,
    subId,
    type
  } = eventInfo

  requireParam(userId, 'userId')
  requireParam(sub, 'sub')
  requireParam(subId, 'subId')
  requireParam(type, 'type')

  await validateType(type, allowedTypes)
  await validateUserId(userId)
  await validateId(sub, subId)
  
  return eventInfo

}

function normalize(eventInfo: any){
  return eventInfo
}