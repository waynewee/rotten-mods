// import { Request, Response, NextFunction } from 'express';
// import Mod from '../models/mod'
// import Rating from '../models/rating'
// import { Types } from 'mongoose'

// const { ObjectId } = Types

// export let searchMods = (req: Request, res: Response, next: NextFunction) => {

//   const {
//     s = "",
//     page = "1",
//     limit = "10"
//   } = req.query as { s: string, page: string, limit: string }

//   const _page = parseInt(page)
//   const _limit = parseInt(limit)

//   Mod.find({
//     $or: [
//       { title: { $regex: s, $options: 'i' } },
//       { code: { $regex: s, $options: 'i' } }
//     ]
//   })
//   .limit(_limit)
//   .skip((_page - 1) * _limit)
//   .then(mods => res.send(mods))
//   .catch(next)

// }

// export let deleteMod = (req:Request, res: Response, next: NextFunction) => {

//   Mod.deleteOne({ _id: req.params.id})
//   .then(() => res.sendStatus(200))
//   .catch(next)

// }

// export let addMod = (req:Request, res:Response, next: NextFunction) => {

//   let mod = new Mod(req.body);

//   mod.save()
//   .then(mod => res.send(mod))
//   .catch(next)

// }

// export let getMod = (req: Request, res: Response, next: NextFunction) => {

//   Mod.findOne({ _id: req.params.id})
//   .then( mod => res.send(mod))
//   .catch(next)

// }

// export let updateMod = (req: Request, res: Response, next: NextFunction) => {
//   Mod.findByIdAndUpdate(req.params.id, req.body)
//   .then(()=>res.sendStatus(200))
//   .catch(next)
// }

// export let getModRating = (req: Request, res: Response, next: NextFunction) => {

//   Rating.aggregate([
//     {
//       $match: {
//         modId: ObjectId(req.params.id)
//       }
//     },
//     {
//       $group: {
//         _id: '$modId',
//         value: { $avg: '$value' }
//       }
//     }
//   ])
//   .then( results => {
//     const result = results[0]
//     res.send(result.value)
//   })
//   .catch(next)

// }