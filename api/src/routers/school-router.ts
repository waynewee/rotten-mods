import { Request, Response, NextFunction } from "express"
import * as SchoolHandler from "../handlers/school-handler";

import { adaptRequest } from '../helpers/adapt-request'
import { requireLogin } from "../middleware";

export default async function schoolRouter(req: Request, res: Response ){
  const request = adaptRequest(req)

  try {
    let result;
    const { id } = request.params

    switch(request.method){
      case 'GET':
        id?
          result = await SchoolHandler.findById(id)
          :
          result = await SchoolHandler.search(request.query)
        break
      case 'POST':
        await requireLogin(req, res)
        result = await SchoolHandler.create(request.body)
        break
      case 'DELETE':
        await requireLogin(req, res)
        result = await SchoolHandler.remove(id)
        break
      case 'PUT':
        await requireLogin(req, res)
        result = await SchoolHandler.update(id, request.body)
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

