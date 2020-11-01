import { Request, Response, NextFunction } from "express"

import { adaptRequest } from '../helpers/adapt-request'
import * as ModHandler from '../handlers/mod-handler'
import { requireLogin } from "../middleware";

export default async function modRouter(req: Request, res: Response ){
  const request = adaptRequest(req)



  try {
    let result;
    const { id } = request.params

    switch(request.method){
      case 'GET':
        id?
          result = await ModHandler.findById(id)
        :
          result = await ModHandler.search(request.query)
        
        break
      case 'POST':
        await requireLogin(req, res)
        result = await ModHandler.create(request.body)
        break
      case 'PUT':
        await requireLogin(req, res)
        result = await ModHandler.update(id, request.body)
        break
      case 'DELETE':
        await requireLogin(req, res)
        result = await ModHandler.remove(id)
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

