import { Request, Response, NextFunction } from "express"
import * as ReplyHandler from "../handlers/reply-handler";

import { adaptRequest } from '../helpers/adapt-request'
import { requireLogin } from "../helpers/require-login";

export default async function replyRouter(req: Request, res: Response ){
  const request = adaptRequest(req)

  try {
    let result;
    const { id } = request.params

    switch(request.method){
      case 'GET':
        id?
          result = await ReplyHandler.findById(id)
          :
          result = await ReplyHandler.findByReviewId(request.query.reviewId)
        break
      case 'POST':
        await requireLogin(req)
        result = await ReplyHandler.create(request.body)
        break
      case 'DELETE':
        await requireLogin(req)
        result = await ReplyHandler.remove(id)
        break
      case 'PUT':
        await requireLogin(req)
        result = await ReplyHandler.update(id, request.body)
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

