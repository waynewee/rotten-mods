import { Request, Response, NextFunction } from 'express';
import User from '../models/user'
import * as PasswordServices from '../services/password'

export let login = (req: Request, res: Response, next: NextFunction) =>{
  
  const {
    email,
    password
  } = req.body

  User.findOne({ email })
  .then( user => {
    if( user ){
      return PasswordServices.verify(password, user.password)
      .then( verified => {
        if( verified ){
          res.sendStatus(200)
        } else {
          res.sendStatus(403)
        }
      })
    } else {
      res.sendStatus(403)
    }

  })
  .catch(next)

}