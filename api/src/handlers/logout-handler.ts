import { Response} from 'express'
import { removeCookie } from '../helpers/cookie'

export async function handleLogout(res: Response){
  removeCookie(res)
}