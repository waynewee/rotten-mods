import makeReview from '../makers/review-maker'
import Review from '../models/review'
import User from '../models/user'
import { ObjectNotFoundError } from '../errors'
import { transformReviews } from '../transformers/review-transformer'


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

  return review

}

export async function update(id: string, reviewInfo: any){
  const existingReview = await Review.findOne({ _id: id })

  if( !existingReview){
    throw new ObjectNotFoundError('Review')
  }

  const mod = await makeReview({
    ...existingReview._doc,
    ...reviewInfo
  })
  const result = await Review.updateOne({_id: id}, mod)

  return result
}

export async function create(reviewInfo: any){

  const review = await makeReview(reviewInfo)
  const newReview = new Review(review)
  return newReview.save()

}

export async function remove(id: string){
  const result = await Review.deleteOne({_id: id})

  if( result.n === 0 ){
    throw new ObjectNotFoundError("Review")
  }

  return result
}