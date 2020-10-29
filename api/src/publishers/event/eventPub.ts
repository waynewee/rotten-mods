import Mod from '../../models/mod'
import School from '../../models/school'
import Course from '../../models/course'
import Review from '../../models/review'
import Reply from '../../models/reply'

enum eventSubTypesEnum {
  mod = "mod",
  school = "school",
  course = "course",
  review = "review",
  reply = "reply",
}

export const eventSubTypes = [
  eventSubTypesEnum.mod, 
  eventSubTypesEnum.school, 
  eventSubTypesEnum.course,
  eventSubTypesEnum.review,
  eventSubTypesEnum.reply
]

const eventSubs = [
  Mod, 
  School, 
  Course,
  Review,
  Reply
]

class EventPub {

  static notify(event: any){

    let promises:any = []

    for (let i = 0; i < eventSubs.length; i++ ){

      const sub:any = eventSubs[i]
      const subType = eventSubTypes[i]

      if(event.sub == subType){

        return sub.findOne({ _id: event.subId})
        .then( (subObj: any) => {
          
          const eventType = event.type
  
          if( !subObj.event ){
            subObj.event = {}
          }

          if( !subObj.event[eventType] ){
            subObj.event[eventType] = {}
          }

          subObj.event[eventType].count += 1
          
          promises.push(subObj.save())

        })
      }
    }

    return Promise.all(promises)

  }

  static notifyOfDeletion(event: any){

    let promises:any = []

    for (let i = 0; i < eventSubs.length; i++ ){

      const sub:any = eventSubs[i]
      const subType = eventSubTypes[i]

      if(event.sub == subType){

        return sub.findOne({ _id: event.subId})
        .then( (subObj: any) => {
          
          const eventType = event.type

          subObj.event[eventType].count -= 1
          
          promises.push(subObj.save())

        })
      }
    }

    return Promise.all(promises)

  }

}

export default EventPub