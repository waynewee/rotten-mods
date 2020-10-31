import { Request, Response, NextFunction } from "express"
import LoginHandler from "../handlers/login-handler";

import { adaptRequest } from '../helpers/adapt-request'

export default async function loginRouter(req: Request, res: Response ){
  const request = adaptRequest(req)

  try {
    let result;

    switch(request.method){
      case 'POST':
        result = await LoginHandler.handleLogin(request.body, res)
        break
      default:
        res
        .status(405)
        .send(`${request.method} not allowed.`)
    }

    res
    .status(200)
    .send(result)

  } catch(e){

    res
    .status(e.statusCode || 500)
    .send(e.message)

  }

}

