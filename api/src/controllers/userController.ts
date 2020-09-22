import { Request, Response, NextFunction } from 'express';
import User from '../models/user'
import * as UserServices from '../services/user'

export let allUsers = (req: Request, res: Response, next: NextFunction) => {

  let users = User.find()
  .then( users => res.send(users))
  .catch(next)

}

export let getUser = (req: Request, res: Response, next: NextFunction) => {

  User.findById(req.params.id)
  .then(user => res.send(user))
  .catch(next)
}

export let addUser = (req: Request, res: Response, next: NextFunction) => {
  let user = new User(req.body);

  user.save()
  .then(() => res.send(user))
  .catch(next)
}

export let deleteUser = (req: Request, res: Response, next: NextFunction) => {
  User.deleteOne({ _id: req.params.id })
  .then(()=>res.send(200))
  .catch(next)
}

export let updateUser = (req: Request, res: Response, next: NextFunction) => {
  User.findByIdAndUpdate(req.params.id, req.body)
  .then(() => res.send(200))
  .catch(next)
}