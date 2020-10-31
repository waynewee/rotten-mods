// import { Request, Response, NextFunction } from 'express';
// import Reply from '../models/reply'

// export let getRepliesByReviewId = (req: Request, res: Response, next: NextFunction) => {

//   Reply.find({reviewId: req.params.reviewId})
//   .then( replies => res.send(replies))
//   .catch(next)
// }

// export let getReply = (req: Request, res: Response, next: NextFunction) => {

//   Reply.findById(req.params.id)
//   .then(reply => res.send(reply))
//   .catch(next)

// }

// export let addReply = (req: Request, res: Response, next: NextFunction) => {
//   let reply = new Reply(req.body);

//   reply.save()
//   .then(() => res.send(reply))
//   .catch(next)
// }

// export let deleteReply = (req: Request, res: Response, next: NextFunction) => {
//   Reply.deleteOne({ _id: req.params.id })
//   .then(()=>res.sendStatus(200))
//   .catch(next)
// }

// export let updateReply = (req: Request, res: Response, next: NextFunction) => {
//   Reply.findByIdAndUpdate(req.params.id, req.body)
//   .then(() => res.sendStatus(200))
//   .catch(next)
// }