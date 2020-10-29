import { Request, Response, NextFunction } from 'express';
import School from '../models/school'

export let searchSchools = (req: Request, res: Response, next: NextFunction) => {

  const {
    s = "",
    page = "1",
    limit = "10"
  } = req.query as { s: string, page: string, limit: string }

  const _page = parseInt(page)
  const _limit = parseInt(limit)

  School.find({
    $or: [
      { name: { $regex: s, $options: 'i' } }
    ]
  })
  .limit(_limit)
  .skip((_page - 1) * _limit)
  .then(schools => res.send(schools))
  .catch(next)

}

export let getSchool = (req: Request, res: Response, next: NextFunction) => {

  School.findById(req.params.id)
  .then(school => res.send(school))
  .catch(next)
}

export let addSchool = (req: Request, res: Response, next: NextFunction) => {
  let school = new School(req.body);

  school.shortName = School.getShortName(school.name)

  school.save()
  .then(() => res.send(school))
  .catch(next)
}

export let deleteSchool = (req: Request, res: Response, next: NextFunction) => {
  School.deleteOne({ _id: req.params.id })
  .then(()=>res.sendStatus(200))
  .catch(next)
}

export let updateSchool = (req: Request, res: Response, next: NextFunction) => {
  School.findByIdAndUpdate(req.params.id, {
    ...req.body,
    shortName: School.getShortName(req.body.name)
  })
  .then(() => res.sendStatus(200))
  .catch(next)
}