import { Request, Response, NextFunction } from 'express';
import Event from '../models/event'
import EventPublisher from '../publishers/event/eventPub'

export let addEvent = (req: Request, res: Response, next: NextFunction) => {
  let event = new Event(req.body);

  event.save()
  .then( event => {
    return EventPublisher.notify(event)
    .then(() => res.sendStatus(200))
  })
  .catch(next)
}