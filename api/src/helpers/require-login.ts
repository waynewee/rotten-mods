import { Request, Response, NextFunction } from "express"
import { AuthenticationError } from "../errors";
import { hash } from './hash'

import User from '../models/user'
import { verify } from "./verify-password";

export async function requireLogin(req: Request){

  const { token } = req.cookies;

  if( !token ){
    throw new AuthenticationError("User")
  }


  try {
    const userId = token.value
    
    const authenticated = await verify(userId, token.token)

    if( !authenticated ){
      throw new AuthenticationError("User")
    }
  
    const user = await User.findOne({ _id: userId })
    
    if( !user ){
      throw new AuthenticationError("User")
    }

  } catch (e){
    throw new AuthenticationError("User")
  }


}