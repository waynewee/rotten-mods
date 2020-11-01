import makeReply from '../makers/reply-maker'
import Reply from '../models/reply'
import { ObjectNotFoundError } from '../errors'


export async function findByReviewId( reviewId: string ){
  const reply = await Reply.find({ reviewId })
  return reply
}

export async function findById(id: string){
    
  const reply = await Reply.findById(id)

  if(!reply){
    throw new ObjectNotFoundError('Reply')
  }

  return reply

}

export async function create(replyInfo: any){

  const reply = await makeReply(replyInfo)
  const newReply = new Reply(reply)
  return newReply.save()

}

export async function update(id: string, replyInfo: any){
  const existingReply = await Reply.findOne({ _id: id })

  if( !existingReply){
    throw new ObjectNotFoundError('Reply')
  }

  const mod = await makeReply({
    ...existingReply._doc,
    ...replyInfo
  })
  const result = await Reply.updateOne({_id: id}, mod)

  return result
}

export async function remove(id: string){
  const result = await Reply.deleteOne({_id: id})

  if( result.n === 0 ){
    throw new ObjectNotFoundError("Reply")
  }

  return result
}