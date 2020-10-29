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

export let deleteEvent = (req: Request, res: Response, next: NextFunction) => {

  const {
    userId,
    sub,
    subId,
    type
  } = req.body

  Event.findOneAndDelete({ 
    $and: [
      { userId },
      { sub },
      { subId },
      { type }
    ]
   })
  .then((event) =>{
    return EventPublisher.notifyOfDeletion(event)
    .then(() => res.sendStatus(200))
  })
  .catch(next)
}

export let findEvent = (req: Request, res: Response, next: NextFunction) => {
 
  const {
    userId,
    type,
    sub,
    subId
  } = req.query as { userId: string, type: string, sub: string, subId: string }

  Event.findOne({
    $and: [
      { userId: ObjectId(userId)},
      { type: { $regex: type } },
      { sub: { $regex: sub } },
      { subId: ObjectId(subId) }
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