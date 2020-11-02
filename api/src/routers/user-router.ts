import { Request, Response, NextFunction } from "express"
import * as UserHandler from "../handlers/user-handler";

import { adaptRequest } from '../helpers/adapt-request'
import { requireLogin } from "../helpers/require-login";

export default async function userRouter(req: Request, res: Response ){
  const request = adaptRequest(req)

  try {
    let result;
    const { id } = request.params

    switch(request.method){
      case 'GET':
        result = await UserHandler.findById(id)
        break
      case 'POST':
        result = await UserHandler.create(request.body)
        break
      case 'DELETE':
        await requireLogin(req)
        result = await UserHandler.remove(id)
        break
      case 'PUT':
        await requireLogin(req)
        result = await UserHandler.update(id, request.body)
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

