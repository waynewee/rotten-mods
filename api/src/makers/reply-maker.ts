import { InvalidParameterError } from "../errors"
import { requireParam } from "../helpers/require-param"
import { capitalize, upperCase } from "../helpers/string-methods"
import {
  validateModId,
  validateReplyId,
  validateReviewId,
  validateUserId
} from '../validators'

export default async function makeReply(replyInfo: any){

  const validated = await validate(replyInfo)
  const transformed = await transform(validated)
  const normalized = normalize(transformed)

  return normalized

}

function transform(replyInfo: any){
  return replyInfo
}

async function validate(replyInfo: any){

  const {
    userId, 
    text,
    reviewId,
    replyId
  } = replyInfo

  requireParam(userId, 'userId')
  requireParam(text, 'text')
  requireParam(reviewId, 'reviewId')
  await validateUserId(userId)
  await validateReviewId(reviewId)
  await validateReplyId(replyId)

  return replyInfo

}

function normalize(replyInfo: any){
  return replyInfo
}