import { Request, Response, NextFunction } from "express"
import * as RecommendationHandler from "../handlers/recommendation-handler";

import { adaptRequest } from '../helpers/adapt-request'

export default async function recommendationRouter(req: Request, res: Response ){
  const request = adaptRequest(req)

  try {
    let result;
    const { userId } = request.query

    switch(request.method){
      case 'GET':
        userId?
        result = await RecommendationHandler.findByTypeAndUserId(request.query)
        :
        result = await RecommendationHandler.findByType(request.query.type)
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

