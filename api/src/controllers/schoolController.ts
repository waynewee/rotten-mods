import { Request, Response, NextFunction } from 'express';
import School from '../models/school'

export let allSchools = (req: Request, res: Response, next: NextFunction) => {

  School.find()
  .then( schools => res.send(schools))
  .catch(next)
}

export let getSchool = (req: Request, res: Response, next: NextFunction) => {

  School.findById(req.params.id)
  .then(school => res.send(school))
  .catch(next)
}

export let addSchool = (req: Request, res: Response, next: NextFunction) => {
  let school = new School(req.body);

  school.save()
  .then(() => res.send(school))
  .catch(next)
}

export let deleteSchool = (req: Request, res: Response, next: NextFunction) => {
  School.deleteOne({ _id: req.params.id })
  .then(()=>res.send(200))
  .catch(next)
}

export let updateSchool = (req: Request, res: Response, next: NextFunction) => {
  School.findByIdAndUpdate(req.params.id, req.body)
  .then(() => res.send(200))
  .catch(next)
}