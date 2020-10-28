import Mod from '../../models/mod'
import School from '../../models/school'
import Course from '../../models/course'
import Review from '../../models/review'

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

class RatingPub {

  static notify(rating: any){

    let promises:any = []

    for (let i = 0; i < ratingSubs.length; i++ ){

      const sub:any = ratingSubs[i]
      const ratingSubType = ratingSubTypes[i]

      if(rating.sub == ratingSubType){

        sub.findOne({ _id: rating.subId})
        .then( (subObj: any) => {
          
          const ratingType = rating.type

          if( !subObj.rating ){
            subObj.rating = {}
          }

          if( !subObj.rating[ratingType] ){
            subObj.rating[ratingType] = {}
          }
  
          subObj.rating[ratingType].count += 1

          const count = subObj.rating[ratingType].count

          subObj.rating[ratingType].value = ((subObj.rating[ratingType].value * (count - 1)) + rating.value)/count

          promises.push(subObj.save())

        })
      }
    }

    return Promise.all(promises)

  }

}

export default RatingPub