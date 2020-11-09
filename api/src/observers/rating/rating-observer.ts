import Mod from '../../models/mod'
import School from '../../models/school'
import Course from '../../models/course'
import Review from '../../models/review'
import Rating from '../../models/rating'
import { InvalidParameterError, ObjectNotFoundError } from '../../errors'

enum ratingSubTypesEnum {
  mod = "mod",
  school = "school",
  course = "course",
  review = "review"
}

export const ratingSubTypes = [
  ratingSubTypesEnum.mod, 
  ratingSubTypesEnum.school, 
  ratingSubTypesEnum.course,
  ratingSubTypesEnum.review
]

const ratingSubs = [
  Mod, 
  School, 
  Course,
  Review
]

export async function notify(rating: any, remove = false){

  let promises:any = []

  for (let i = 0; i < ratingSubs.length; i++ ){

    const sub:any = ratingSubs[i]

    if(rating.sub == sub.modelName){

      sub.findOne({ _id: rating.subId})
      .then( (subObj: any) => {
        
        const ratingType = rating.type

        if( !subObj.rating ){
          subObj.rating = {}
        }

        if( !subObj.rating[ratingType] ){
          subObj.rating[ratingType] = {}
        }

        if( remove ){

          if(!subObj.rating[ratingType].count || subObj.rating[ratingType].count == 0 ){
            throw new ObjectNotFoundError("Rating")
          } 

          const count = subObj.rating[ratingType].count

          subObj.rating[ratingType].value = count - 1 == 0? undefined: ((subObj.rating[ratingType].value) * count - rating.value)/(count - 1)
          subObj.rating[ratingType].count -= 1

          
        } else {

          subObj.rating[ratingType].count = subObj.rating[ratingType].count || 0
          subObj.rating[ratingType].value = subObj.rating[ratingType].value || 0

          const count = subObj.rating[ratingType].count
          
          subObj.rating[ratingType].value = ((subObj.rating[ratingType].value * count + rating.value)/(count + 1))
          subObj.rating[ratingType].count += 1
        
        }


        promises.push(subObj.save())

      })
    }
  }

  return Promise.all(promises)

}

export async function notifyOfUpdate(oldRatingValue: number, rating: any){

  let promises:any = []

  for (let i = 0; i < ratingSubs.length; i++ ){

    const sub:any = ratingSubs[i]

    if(rating.sub == sub.modelName){
      sub.findOne({ _id: rating.subId})
      .then( (subObj: any) => {
        
        const ratingType = rating.type

        if( !subObj.rating ){
          subObj.rating = {}
        }

        if( !subObj.rating[ratingType] ){
          subObj.rating[ratingType] = {}
        }

        if(!subObj.rating[ratingType].count || subObj.rating[ratingType].count == 0 ){
          throw new ObjectNotFoundError("Rating")
        } 

        const count = subObj.rating[ratingType].count
        const currValue = count * subObj.rating[ratingType].value

        const newValue = (currValue - oldRatingValue + rating.value)/count 

        subObj.rating[ratingType].value = newValue

        promises.push(subObj.save())

      })
    }
  }

  return Promise.all(promises)

}