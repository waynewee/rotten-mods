import { Request, Response, NextFunction } from 'express';
import Mod from '../models/mod'
import * as UserServices from '../services/user'

export let searchMods = (req: Request, res: Response, next: NextFunction) => {

  const {
    title,
    code,
    page,
    limit
  } = req.query as { title: string, code: string, page: string, limit: string }

  const _page = parseInt(page)
  const _limit = parseInt(limit)

  Mod.find({
    $or: [
      { title: { $regex: title?title:'', $options: 'i' } },
      { code: { $regex: code?code:'', $options: 'i' } }
    ]
  })
  .limit(_limit)
  .skip((_page - 1) * _limit)
  .then(mods => res.send(mods))
  .catch(next)

}

export let addMod = (req:Request, res:Response, next: NextFunction) => {

  let mod = new Mod(req.body);

  mod.save()
  .then(mod => res.send(mod))
  .catch(next)

}