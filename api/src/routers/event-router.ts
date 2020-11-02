import { Request, Response, NextFunction } from "express"
import * as EventHandler from "../handlers/event-handler";

import { adaptRequest } from '../helpers/adapt-request'

export default async function eventRouter(req: Request, res: Response ){
  const request = adaptRequest(req)

  try {
    let result;

    switch(request.method){
      case 'POST':
        result = await EventHandler.create(request.body)
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

