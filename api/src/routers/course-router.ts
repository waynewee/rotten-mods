import { Request, Response, NextFunction } from "express"
import * as CourseHandler from "../handlers/course-handler";

import { adaptRequest } from '../helpers/adapt-request'
import { requireLogin } from "../middleware";

export default async function courseRouter(req: Request, res: Response ){
  const request = adaptRequest(req)

  try {
    let result;
    const { id } = request.params

    switch(request.method){
      case 'GET':
        id?
          result = await CourseHandler.findById(id)
          :
          result = await CourseHandler.search(request.query)
        break
      case 'POST':
        await requireLogin(req, res)
        result = await CourseHandler.create(request.body)
        break
      case 'DELETE':
        await requireLogin(req, res)
        result = await CourseHandler.remove(id)
        break
      case 'PUT':
        await requireLogin(req, res)
        result = await CourseHandler.update(id, request.body)
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

