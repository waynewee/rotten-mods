import { Request, Response, NextFunction } from 'express';
import Event from '../models/event'

export let addEvent = (req: Request, res: Response, next: NextFunction) => {
  let event = new Event(req.body);

  event.save()
  .then(() => res.send(event))
  .catch(next)
}