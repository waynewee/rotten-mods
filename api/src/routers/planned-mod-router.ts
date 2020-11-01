import { Request, Response, NextFunction } from "express"
import * as PlannedModHandler from "../handlers/planned-mod-handler";

import { adaptRequest } from '../helpers/adapt-request'
import { requireLogin } from "../middleware";

export default async function plannedModRouter(req: Request, res: Response ){
  const request = adaptRequest(req)

  try {
    let result;
    const { id } = request.params

    switch(request.method){
      case 'GET':
        result = await PlannedModHandler.findByUserId(request.query.userId)
        break
      case 'POST':
        console.log("HELLO")
        await requireLogin(req, res)
        result = await PlannedModHandler.create(request.body)
        break
      case 'PUT':
        await requireLogin(req,res)
        result = await PlannedModHandler.update(id, request.body)
        break
      case 'DELETE':
        await requireLogin(req, res)
        result = await PlannedModHandler.remove(id)
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
