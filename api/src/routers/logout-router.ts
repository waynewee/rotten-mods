import { Request, Response, NextFunction } from "express"
import LogoutHandler from "../handlers/logout-handler";

import { adaptRequest } from '../helpers/adapt-request'

export default async function logoutRouter(req: Request, res: Response ){
  const request = adaptRequest(req)

  try {
    let result;

    switch(request.method){
      case 'POST':
        result = LogoutHandler.handleLogout(res)
        break
      default:
        res
        .status(405)
        .send(`${request.method} not allowed.`)
    }

    res
    .sendStatus(200)

  } catch(e){

    res
    .status(e.statusCode || 500)
    .send(e.message)

  }

}

