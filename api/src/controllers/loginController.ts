import { Request, Response, NextFunction } from 'express';
import User from '../models/user'
import { encrypt, verify } from '../services/security'

export let login = (req: Request, res: Response, next: NextFunction) =>{
  
  const {
    email,
    password
  } = req.body

  User.findOne({ email })
  .then( user => {
    if( user ){
      return verify(password, user.password)
      .then( verified => {
        if( verified ){
          
          res.cookie('token', encrypt(user._id.toString()), {
            maxAge: 1000 * 60 * 60 * 24 * 7,
            httpOnly: true
          })

          res.send(user)
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