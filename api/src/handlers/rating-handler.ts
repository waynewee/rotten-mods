import { ObjectNotFoundError } from '../errors'
import makeRating from '../makers/rating-maker'
import Rating from '../models/rating'
import RatingObserver from '../observers/rating/rating-observer'

export default class RatingHandler {

  static async create(ratingInfo: any){

    const rating = await makeRating(ratingInfo)

    const newRating = new Rating(rating)
    const result = await newRating.save()
    
    await RatingObserver.notify(result)
    
    return result

  }

  static async findByInfo(ratingInfo: any){
      
    const {
      sub,
      subId,
      type,
      userId
    } = ratingInfo


    const rating = await Rating.findOne({
      sub,
      subId,
      type,
      userId
    })

    if(!rating){
      throw new ObjectNotFoundError('Rating')
    }

    return rating

  }

  static async update(id: string, ratingInfo: any){
    const existingRating = await Rating.findOne({ _id: id })

    if( !existingRating){
      throw new ObjectNotFoundError('Rating')
    }

    const updatedRatingInfo = {
      ...existingRating._doc,
      ...ratingInfo
    }

    const mod = await makeRating(updatedRatingInfo)

    const rating = await Rating.updateOne({_id: id}, mod)

    await RatingObserver.notifyOfUpdate(existingRating.value, updatedRatingInfo)

    return rating
  }
  
}