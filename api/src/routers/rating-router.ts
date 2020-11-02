import { Request, Response, NextFunction } from "express"
import * as RatingHandler from "../handlers/rating-handler";

import { adaptRequest } from '../helpers/adapt-request'
import { requireLogin } from "../helpers/require-login";

export default async function ratingRouter(req: Request, res: Response ){
  const request = adaptRequest(req)
  const { id } = req.params
  try {
    let result;

    switch(request.method){
      case 'GET': 
        result = await RatingHandler.findByInfo(request.query)
        break
      case 'POST':
        await requireLogin(req)
        result = await RatingHandler.create(request.body)
        break
      case 'PUT':
        await requireLogin(req)
        result = await RatingHandler.update(id, request.body)
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

