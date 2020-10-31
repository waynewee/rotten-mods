import { Request, Response, NextFunction } from "express"
import ReviewHandler from "../handlers/review-handler";

import { adaptRequest } from '../helpers/adapt-request'
import { requireLogin } from "../middleware";

export default async function reviewRouter(req: Request, res: Response ){
  const request = adaptRequest(req)

  try {
    let result;
    const { id } = request.params

    switch(request.method){
      case 'GET':
        id?
          result = await ReviewHandler.findById(id)
          :
          request.query.modId?
            result = await ReviewHandler.findByModId(request.query.modId)
            :
            result = await ReviewHandler.findByUserId(request.query.userId)
        break
      case 'POST':
        await requireLogin(req, res)
        result = await ReviewHandler.create(request.body)
        break
      case 'DELETE':
        await requireLogin(req, res)
        result = await ReviewHandler.remove(id)
        break
      case 'PUT':
        await requireLogin(req, res)
        result = await ReviewHandler.update(id, request.body)
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

