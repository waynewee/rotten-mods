import { Request, Response, NextFunction } from 'express';
import User from '../models/user'
import SavedModsList from '../models/savedModsList'
import * as UserServices from '../services/user'
import * as SecurityServices from '../services/security'

export let getUser = (req: Request, res: Response, next: NextFunction) => {

  User.findById(req.params.id)
  .then(user => res.send(user))
  .catch(next)
}

export let addUser = (req: Request, res: Response, next: NextFunction) => {

  SecurityServices.hash(req.body.password)
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
  User.deleteOne({ _id: req.params.id })
  .then(()=>res.sendStatus(200))
  .catch(next)
}

export let updateUser = (req: Request, res: Response, next: NextFunction) => {
  User.findByIdAndUpdate(req.params.id, req.body)
  .then(() => res.sendStatus(200))
  .catch(next)
}

export let getUserSavedMods = (req: Request, res: Response, next: NextFunction) => {

  SavedModsList.findOne({ userId: req.params.id })
  .then( savedModsList => res.send(savedModsList))
  .catch(next)
  
}