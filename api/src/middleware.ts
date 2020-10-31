import { Request, Response, NextFunction } from "express"
import { AuthenticationError } from "./errors";
import { decrypt } from "./helpers/encrypt-decrypt";

import User from './models/user'

export async function requireLogin(req: Request, res: Response){

  const { token } = req.cookies;

  if( !token ){
    throw new AuthenticationError("User")
  }


  try {
    const userId = decrypt(token)
  
    const user = await User.findOne({ _id: userId })
    
    if( !user ){
      throw new AuthenticationError("User")
    }

  } catch (e){
    throw new AuthenticationError("User")
  }


}