import { InvalidParameterError } from "../errors"
import { requireParam } from "../helpers/require-param"
import { capitalize, upperCase } from "../helpers/string-methods"
import {
  validateEmailExists,
  validateModId,
  validateUserId
} from '../validators'

export default async function makeLogin(loginInfo: any){

  const validated = await validate(loginInfo)
  const transformed = await transform(validated)
  const normalized = normalize(transformed)
  
  return normalized

}

function transform(loginInfo: any){
  return loginInfo
}

async function validate(loginInfo: any){

  const {
    email,
    password
  } = loginInfo

  requireParam(email, 'email')
  requireParam(password, 'password')
  await validateEmailExists(email)

  return loginInfo

}

function normalize(loginInfo: any){
  return loginInfo
}