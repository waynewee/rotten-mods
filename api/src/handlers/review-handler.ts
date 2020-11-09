import makeReview from '../makers/review-maker'
import Review from '../models/review'
import * as RatingHandler from '../handlers/rating-handler'
import User from '../models/user'
import { ObjectNotFoundError } from '../errors'
import { transformReviews } from '../transformers/review-transformer'
import Rating from '../models/rating'


export async function findByUserId( userId: string ){
  const reviews = await Review.find({ userId })
  return reviews
}

export async function findByModId( modId: string ){
  const reviews = await Review.find({ modId })
  const transformedReviews = await transformReviews(reviews)
  return transformedReviews
}

export async function findById(id: string){
    
  const review = await Review.findById(id)

  if(!review){
    throw new ObjectNotFoundError('Review')
  }

  const rating = await Rating.findById(review.ratingId)

  const reviewObj = review.toJSON()

  reviewObj.rating = rating

  return reviewObj

}

export async function update(id: string, reviewInfo: any){
  const existingReview = await Review.findOne({ _id: id })

  if( !existingReview){
    throw new ObjectNotFoundError('Review')
  }

  const review = await makeReview({
    ...existingReview._doc,
    ...reviewInfo
  })

  const result = await Review.updateOne({_id: id}, review)

  const ratings = getRatingsInfoFromReview(review)

  for( let i = 0; i < ratings.length; i++ ){
    await RatingHandler.updateByInfo(ratings[i])
  }


  return result
}

export async function create(reviewInfo: any){

  const review = await makeReview(reviewInfo)
  const newReview = new Review(review)
  
  const ratings = getRatingsInfoFromReview(review)

  const ratingIds = []

  for( let i = 0; i < ratings.length; i++ ){
    
    const rating = await RatingHandler.create(ratings[i])
    ratingIds.push(rating._id.toString())
  }

  
  newReview.ratingIds = ratingIds

  return newReview.save()

}

export async function remove(id: string){

  const review = await Review.findOne({_id: id})
  
  if( !review ){
    throw new ObjectNotFoundError("Review")
  }

  
  const result = await Review.deleteOne({_id: id})
  
  const { ratingIds } = review

  for( let i = 0; i < ratingIds.length; i++ ){
    await RatingHandler.remove(ratingIds[i])
  }
  

  return result 
}

function getRatingsInfoFromReview(reviewInfo: any){

  const { 
    userId,
    modId
  } = reviewInfo

  const sub = "mod"
  const subId = modId

  const ratings = reviewInfo.ratings

  const ratingsInfo = ratings.map( (rating: any) => {

    const { type, value } = rating

    return ({
      userId, 
      type,
      value,
      sub,
      subId,
    })
    
  })

  return ratingsInfo

}