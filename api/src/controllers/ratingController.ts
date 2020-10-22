import { Request, Response, NextFunction } from 'express';
import Rating from '../models/rating'
import Mod from '../models/mod'

export let addRating = (req: Request, res: Response, next: NextFunction) => {
  let rating = new Rating(req.body);
  rating.save()
  .then(rating => {
    return Mod.findOneAndUpdateRating(rating)
    .then(() => res.send(rating))
  })
  .catch(next)
}

export let deleteRating = (req: Request, res: Response, next: NextFunction) => {
  Rating.deleteOne({ _id: req.params.id })
  .then(()=>res.sendStatus(200))
  .catch(next)
}

export let updateRating = (req: Request, res: Response, next: NextFunction) => {
  Rating.findByIdAndUpdate(req.params.id, req.body)
  .then(rating => {
    return Mod.findOneAndUpdateRating(rating)
    .then(()=>res.sendStatus(200))
  })
  .catch(next)
}
