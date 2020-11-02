import { ObjectNotFoundError } from '../errors'
import makeReaction from '../makers/reaction-maker'
import Reaction from '../models/reaction'
import {notify} from '../observers/reaction/reaction-observer'

export async function create(reactionInfo: any){

  const reaction = await makeReaction(reactionInfo)

  const newReaction = new Reaction(reaction)
  const result = await newReaction.save()
  
  await notify(result)
  
  return result

}

export async function findByInfo(reactionInfo: any){
    
  const {
    sub,
    subId,
    type,
    userId
  } = reactionInfo


  const reaction = await Reaction.findOne({
    sub,
    subId,
    type,
    userId
  })

  if(!reaction){
    throw new ObjectNotFoundError('Reaction')
  }

  return reaction

}

export async function remove(id: string){
  
  const reaction = await Reaction.findOne({_id: id})

  if( !reaction ){
    throw new ObjectNotFoundError("Reaction")
  }

  const result = await Reaction.deleteOne({ _id: id })

  await notify(reaction, true)

  return result

}