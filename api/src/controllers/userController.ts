import { Request, Response, NextFunction } from 'express';
import User from '../models/user'
import * as UserServices from '../services/user'
import * as PasswordServices from '../services/password'

export let allUsers = (req: Request, res: Response, next: NextFunction) => {

  User.find()
  .then( users => res.send(users))
  .catch(next)
}

export let getUser = (req: Request, res: Response, next: NextFunction) => {

  User.findById(req.params.userId)
  .then(user => res.send(user))
  .catch(next)
}

export let addUser = (req: Request, res: Response, next: NextFunction) => {

  PasswordServices.hash(req.body.password)
  .then( hashedPassword => {

    let user = new User({ 
      ...req.body, 
      password: hashedPassword })
  
    return user.save()
    .then(() => res.send(user))
    
  })
  .catch(next)
  
}

export let deleteUser = (req: Request, res: Response, next: NextFunction) => {
  User.deleteOne({ _id: req.params.userId })
  .then(()=>res.sendStatus(200))
  .catch(next)
}

export let updateUser = (req: Request, res: Response, next: NextFunction) => {
  User.findByIdAndUpdate(req.params.userId, req.body)
  .then(() => res.sendStatus(200))
  .catch(next)
}