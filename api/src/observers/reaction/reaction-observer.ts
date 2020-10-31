import Mod from '../../models/mod'
import School from '../../models/school'
import Course from '../../models/course'
import Review from '../../models/review'
import Reply from '../../models/reply'

enum reactionSubTypesEnum {
  mod = "mod",
  school = "school",
  course = "course",
  review = "review",
  reply = "reply",
}

export const reactionSubTypes = [
  reactionSubTypesEnum.mod, 
  reactionSubTypesEnum.school, 
  reactionSubTypesEnum.course,
  reactionSubTypesEnum.review,
  reactionSubTypesEnum.reply
]

const reactionSubs = [
  Mod, 
  School, 
  Course,
  Review,
  Reply
]

class ReactionObserver {

  static notify(reaction: any, remove = false){

    let promises:any = []

    for (let i = 0; i < reactionSubs.length; i++ ){

      const sub:any = reactionSubs[i]
      const subType = reactionSubTypes[i]

      if(reaction.sub == sub.modelName){

        return sub.findOne({ _id: reaction.subId})
        .then( (subObj: any) => {
          
          const reactionType = reaction.type
  
          if( !subObj.reaction ){
            subObj.reaction = {}
          }

          if( !subObj.reaction[reactionType] ){
            subObj.reaction[reactionType] = {}
          }

          if( remove ){
            subObj.reaction[reactionType].count -= 1
          } else {
            subObj.reaction[reactionType].count += 1
          }

          
          promises.push(subObj.save())

        })
      }
    }

    return Promise.all(promises)

  }

}

export default ReactionObserver