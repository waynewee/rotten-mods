import makeReview from '../makers/review-maker'
import Review from '../models/review'
import { ObjectNotFoundError } from '../errors'

export default class ReviewHandler {
  
  static async findByUserId( userId: string ){
    const review = await Review.find({ userId })
    return review
  }
  
  static async findByModId( modId: string ){
    const review = await Review.find({ modId })
    return review
  }

  static async findById(id: string){
      
    const review = await Review.findById(id)

    if(!review){
      throw new ObjectNotFoundError('Review')
    }

    return review

  }

  static async update(id: string, reviewInfo: any){
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

  static async create(reviewInfo: any){

    const review = await makeReview(reviewInfo)
    const newReview = new Review(review)
    return newReview.save()

  }

  static async remove(id: string){
    const result = await Review.deleteOne({_id: id})

    if( result.n === 0 ){
      throw new ObjectNotFoundError("Review")
    }

    return result
  }
}