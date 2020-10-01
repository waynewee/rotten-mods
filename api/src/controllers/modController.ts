import { Request, Response, NextFunction } from 'express';
import Mod from '../models/mod'

export let searchMods = (req: Request, res: Response, next: NextFunction) => {

  const {
    s,
    page,
    limit
  } = req.query as { s: string, page: string, limit: string }

  const _page = parseInt(page)
  const _limit = parseInt(limit)

  Mod.find({
    $or: [
      { title: { s, $options: 'i' } },
      { code: { s, $options: 'i' } }
    ]
  })
  .limit(_limit)
  .skip((_page - 1) * _limit)
  .then(mods => res.send(mods))
  .catch(next)

}

export let deleteMod = (req:Request, res: Response, next: NextFunction) => {

  Mod.deleteOne({ _id: req.params.modId})
  .then(() => res.sendStatus(200))
  .catch(next)

}

export let addMod = (req:Request, res:Response, next: NextFunction) => {

  let mod = new Mod(req.body);

  mod.save()
  .then(mod => res.send(mod))
  .catch(next)

}

export let getMod = (req: Request, res: Response, next: NextFunction) => {

  Mod.findOne({ _id: req.params.modId})
  .then( mod => res.send(mod))
  .catch(next)

}