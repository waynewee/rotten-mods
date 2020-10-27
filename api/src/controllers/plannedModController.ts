import { Request, Response, NextFunction } from 'express';
import PlannedMod from '../models/plannedMod'
import Mod from '../models/mod'

export let getPlannedMods = (req: Request, res: Response, next: NextFunction) => {

  const { userId } = req.params

  PlannedMod.find({userId})
  .then(plannedMods => {
    
    if( plannedMods.length == 0 ){
      res.send(200)
    } else {
      return Mod.find({
        $or: plannedMods.map( plannedMod => ({ _id: plannedMod.modId }))
      })
      .then( mods => {
        console.log(mods.length)
        const modList = PlannedMod.checkForPreReqs(mods, plannedMods)
        
        res.send(modList)

      })
    }
  })
  .catch(next)

}

export let deletePlannedMod = (req:Request, res: Response, next: NextFunction) => {

  PlannedMod.deleteOne({ _id: req.params.id})
  .then(() => res.sendStatus(200))
  .catch(next)

}

export let addPlannedMod = (req:Request, res:Response, next: NextFunction) => {

  let mod = new PlannedMod(req.body);

  mod.save()
  .then(mod => res.send(mod))
  .catch(next)

}

export let updatePlannedMod = (req: Request, res: Response, next: NextFunction) => {
  PlannedMod.findByIdAndUpdate(req.params.id, req.body)
  .then(()=>res.sendStatus(200))
  .catch(next)
}