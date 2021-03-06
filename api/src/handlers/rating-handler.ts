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

export async function findById(ratingId: string){

  const rating = await Rating.findOne({ _id: ratingId })

  if( !rating ){
    throw new ObjectNotFoundError("Rating")
  }

  return rating

}

export async function findByInfo(ratingInfo: any){
    
  const {
    sub,
    subId,
    type,
    userId
  } = ratingInfo


  const rating = await Rating.findOne({
    $and: [
      { sub },
      { subId },
      { type },
      { userId }
    ]
  })

  if(!rating){
    throw new ObjectNotFoundError('Rating')
  }

  return rating

}

export async function updateByInfo(ratingInfo: any){

  const {
    sub,
    subId,
    type,
    userId
  } = ratingInfo

  const existingRating = await Rating.findOne({
    $and: [
      { sub },
      { subId },
      { type },
      { userId }
    ]
   })

  if( !existingRating){
    throw new ObjectNotFoundError('Rating')
  }

  const updatedRatingInfo = {
    ...existingRating._doc,
    ...ratingInfo
  }

  const rating = await makeRating(updatedRatingInfo)

  const result = await Rating.updateOne({_id: existingRating._id }, rating)

  await notifyOfUpdate(existingRating.value, updatedRatingInfo)

  return result
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

  const rating = await makeRating(updatedRatingInfo)

  const result = await Rating.updateOne({_id: id}, rating)

  await notifyOfUpdate(existingRating.value, updatedRatingInfo)

  return result
}

export async function remove(id: string){
  
  const rating = await Rating.findOne({_id: id})

  if( !rating ){
    throw new ObjectNotFoundError("Rating")
  }

  const result = await Rating.deleteOne({ _id: id })

  await notify(rating, true)

  return result

}