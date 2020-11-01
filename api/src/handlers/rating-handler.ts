import { ObjectNotFoundError } from '../errors'
import makeRating from '../makers/rating-maker'
import Rating from '../models/rating'
import { notify, notifyOfUpdate } from '../observers/rating/rating-observer'

export async function create(ratingInfo: any){

  const rating = await makeRating(ratingInfo)

  const newRating = new Rating(rating)
  const result = await newRating.save()
  
  await notify(result)
  
  return result

}

export async function findByInfo(ratingInfo: any){
    
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

export async function update(id: string, ratingInfo: any){
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

  await notifyOfUpdate(existingRating.value, updatedRatingInfo)

  return rating
}
