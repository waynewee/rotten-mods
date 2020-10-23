import { Request, Response, NextFunction } from 'express';
import Review from '../models/review'

export let getAllReviews = (req: Request, res: Response, next: NextFunction) => {

  Review.find()
  .then( reviews => res.send(reviews))
  .catch(next)
}

export let getReviewsByModId = (req: Request, res: Response, next: NextFunction) => {

  const {
    page = "1",
    limit = "10"
  } = req.query as { page: string, limit: string }

  const _page = parseInt(page)
  const _limit = parseInt(limit)

  Review.find({modId: req.params.modId})
  .limit(_limit)
  .skip((_page - 1) * _limit)
  .then(reviews => res.send(reviews))
  .catch(next)
}

export let getReview = (req: Request, res: Response, next: NextFunction) => {

  Review.findById(req.params.id)
  .then(review => res.send(review))
  .catch(next)

}

export let addReview = (req: Request, res: Response, next: NextFunction) => {
  let review = new Review(req.body);

  review.save()
  .then(() => res.send(review))
  .catch(next)
}

export let deleteReview = (req: Request, res: Response, next: NextFunction) => {
  Review.deleteOne({ _id: req.params.id })
  .then(()=>res.sendStatus(200))
  .catch(next)
}

export let updateReview = (req: Request, res: Response, next: NextFunction) => {
  Review.findByIdAndUpdate(req.params.id, req.body)
  .then(() => res.sendStatus(200))
  .catch(next)
}