import { Request, Response, NextFunction } from 'express';
import PlannedMod from '../models/plannedMod'
import Mod from '../models/mod'

export let getPlannedMods = (req: Request, res: Response, next: NextFunction) => {

  const { userId } = req.params

  PlannedMod.find({userId})
  .then(plannedMods => {

    const plannedModsIds = plannedMods.map( plannedMod => plannedMod.modId )
    
    return Mod.findByIds(plannedModsIds)
    .then( (mods: any[]) => {

      const preReqIds = Mod.getPreReqDetails(mods)

      return Mod.findByIds(preReqIds)
      .then( (preReqMods: any[]) => {
        
        const modList = PlannedMod.checkForPreReqs(mods, plannedMods, preReqMods)
        
        res.send(modList)

      })
    })
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