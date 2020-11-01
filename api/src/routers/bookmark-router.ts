import { Request, Response, NextFunction } from "express"
import * as BookmarkHandler from "../handlers/bookmark-handler";

import { adaptRequest } from '../helpers/adapt-request'
import { requireLogin } from "../middleware";

export default async function bookmarkRouter(req: Request, res: Response ){
  const request = adaptRequest(req)

  try {
    let result;
    const { id } = request.params

    switch(request.method){
      case 'GET':
        result = await BookmarkHandler.findByUserId(request.query.userId)
        break
      case 'POST':
        await requireLogin(req, res)
        result = await BookmarkHandler.create(request.body)
        break
      case 'DELETE':
        await requireLogin(req, res)
        result = await BookmarkHandler.remove(id)
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

