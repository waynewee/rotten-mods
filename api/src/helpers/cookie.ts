import { Response } from 'express'
import { hash } from './hash'

export async function setCookie(res: Response, str: string){

  const hashedStr = await hash(str)

  res.cookie('token', {
    token: hashedStr,
    value: str
  }, {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true
  })
}

export function removeCookie(res: Response){
  res.clearCookie('token', {
    httpOnly: true
  })
}