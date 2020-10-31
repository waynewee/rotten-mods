import { Request, Response, NextFunction } from "express"
import ReactionHandler from "../handlers/reaction-handler";

import { adaptRequest } from '../helpers/adapt-request'

export default async function reactionRouter(req: Request, res: Response ){
  const request = adaptRequest(req)

  const { id } = request.params

  try {
    let result;

    switch(request.method){
      case 'POST':
        result = await ReactionHandler.create(request.body)
        break
      case 'DELETE':
        result = await ReactionHandler.remove(id)
        break
      case 'GET':
        result = await ReactionHandler.findByInfo(request.query)
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

