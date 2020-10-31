import { Response } from 'express'
import { AuthenticationError } from '../errors'
import { removeCookie, setCookie } from '../helpers/cookie'
import { verify } from '../helpers/verify-password'
import User from '../models/user'

export default class LogoutHandler {
  static handleLogout(res: Response){
    removeCookie(res)
  }
}