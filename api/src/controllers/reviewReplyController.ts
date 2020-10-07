import { Request, Response, NextFunction } from 'express';
import ReviewReply from '../models/reviewReply'

export let addReviewReply = (req: Request, res: Response, next: NextFunction) => {
  let reviewReply = new ReviewReply(req.body);

  reviewReply.save()
  .then(() => res.send(reviewReply))
  .catch(next)
}

export let deleteReviewReply = (req: Request, res: Response, next: NextFunction) => {
  ReviewReply.deleteOne({ _id: req.params.id })
  .then(()=>res.sendStatus(200))
  .catch(next)
}

export let updateReviewReply = (req: Request, res: Response, next: NextFunction) => {
  ReviewReply.findByIdAndUpdate(req.params.id, req.body)
  .then(() => res.sendStatus(200))
  .catch(next)
}