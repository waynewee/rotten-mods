import { Request, Response, NextFunction } from 'express';
import Event from '../models/event'
import EventPublisher from '../publishers/event/eventPub'
import { Types } from 'mongoose'

const { ObjectId } = Types

export let addEvent = (req: Request, res: Response, next: NextFunction) => {
  let event = new Event(req.body);

  event.save()
  .then( event => {
    return EventPublisher.notify(event)
    .then(() => res.sendStatus(200))
  })
  .catch(next)
}

export let findEvent = (req: Request, res: Response, next: NextFunction) => {
 
  const {
    userId,
    type,
    sub
  } = req.query as { userId: string, type: string, sub: string }

  Event.findOne({
    $and: [
      { userId: ObjectId(userId)},
      { type: { $regex: type } },
      { sub: { $regex: sub } }
    ]
  })
  .then( event => {
    if( event ){
      res.sendStatus(200)
    } else {
      res.sendStatus(404)
    }
  })
  .catch(next)
}