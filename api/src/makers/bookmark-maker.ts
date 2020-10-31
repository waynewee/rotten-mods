import { InvalidParameterError } from "../errors"
import { requireParam } from "../helpers/require-param"
import { capitalize, upperCase } from "../helpers/string-methods"
import {
  validateModId,
  validateUserId
} from '../validators'

export default async function makeBookmark(bookmarkInfo: any){

  const transformed = transform(bookmarkInfo)
  const validated = await validate(transformed)
  const normalized = normalize(validated)

  return normalized

}

function transform(bookmarkInfo: any){
  return bookmarkInfo
}

async function validate(bookmarkInfo: any){

  const {
    userId, 
    modId
  } = bookmarkInfo

  requireParam(userId, 'userId')
  requireParam(modId, 'modId')
  await validateUserId(userId)
  await validateModId(modId)

  return bookmarkInfo

}

function normalize(bookmarkInfo: any){
  return bookmarkInfo
}