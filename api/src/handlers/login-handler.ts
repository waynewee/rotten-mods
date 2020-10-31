import { Response } from 'express'
import { AuthenticationError } from '../errors'
import { setCookie } from '../helpers/cookie'
import { verify } from '../helpers/verify-password'
import User from '../models/user'

export default class LoginHandler {
  static async handleLogin(loginInfo: any, res: Response){

    const { email, password } = loginInfo

    const user = await User.findOne({email: email})

    const verified = await verify(password, user.password)
    
    if(!verified){
      throw new AuthenticationError('User')
    }

    setCookie(res, user._id.toString())

    return user
  }
}