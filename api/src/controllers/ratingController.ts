import { Request, Response, NextFunction } from 'express';
import Rating from '../models/rating'
import RatingPublisher from '../publishers/rating/ratingPub'
import { Types } from 'mongoose'

const { ObjectId } = Types

export let addRating = (req: Request, res: Response, next: NextFunction) => {
  let rating = new Rating(req.body);
  rating.save()
  .then(rating => {
    return RatingPublisher.notify(rating)
    .then(() => res.send(rating))
  })
  .catch(next)
}

export let deleteRating = (req: Request, res: Response, next: NextFunction) => {
  Rating.deleteOne({ _id: req.params.id })
  .then(rating =>{
    return RatingPublisher.notify(rating)
    .then(() => res.send(rating))
  })
  .catch(next)
}

export let updateRating = (req: Request, res: Response, next: NextFunction) => {
  Rating.findByIdAndUpdate(req.params.id, req.body)
  .then(rating => {
    return RatingPublisher.notify(rating)
    .then(()=>res.sendStatus(200))
  })
  .catch(next)
}

export let findRating = (req: Request, res: Response, next: NextFunction) => {
  
  const {
    userId,
    type,
    sub
  } = req.query as { userId: string, type: string, sub: string }

  Rating.findOne({
    $and: [
      { userId: ObjectId(userId)},
      { type: { $regex: type } },
      { sub: { $regex: sub } }
    ]
  })
  .then( rating => {
    if( rating ){
      res.sendStatus(200)
    } else {
      res.sendStatus(404)
    }
  })
  .catch(next)

}