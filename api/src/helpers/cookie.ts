import { Response } from 'express'
import { encrypt } from './encrypt-decrypt'

export function setCookie(res: Response, str: string){
  res.cookie('token', encrypt(str), {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true
  })
}

export function removeCookie(res: Response){
  res.clearCookie('token', {
    httpOnly: true
  })
}