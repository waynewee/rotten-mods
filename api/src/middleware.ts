import { Request, Response, NextFunction } from "express"

import User from './models/user'

import { decrypt } from './services/security'

export const isLoggedIn = (req: Request, res: Response, next: NextFunction) => {

  const { token } = req.cookies;

  if( !token ){
    return res.sendStatus(403)
  }

  try {
    
    const userId = decrypt(token)
  
    User.findOne({ _id: userId })
    .then(user => {
      if( user ){
        next();
      } else {
        res.sendStatus(403)
      }
    })

  } catch( e ){
    console.log(e)
    res.sendStatus(403)
  }


}