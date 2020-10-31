import { ObjectNotFoundError } from '../errors'
import makeReaction from '../makers/reaction-maker'
import Reaction from '../models/reaction'
import ReactionObserver from '../observers/reaction/reaction-observer'

export default class ReactionHandler {

  static async create(reactionInfo: any){

    const reaction = await makeReaction(reactionInfo)

    const newReaction = new Reaction(reaction)
    const result = await newReaction.save()
    
    await ReactionObserver.notify(result)
    
    return result

  }

  static async findByInfo(reactionInfo: any){
      
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

  static async remove(id: string){
    
    const reaction = await Reaction.findOne({_id: id})

    if( !reaction ){
      throw new ObjectNotFoundError("Reaction")
    }

    const result = await Reaction.deleteOne({ _id: id })

    await ReactionObserver.notify(reaction, true)

    return result

  }
  
}