import { Request, Response, NextFunction } from 'express';
import Course from '../models/course'

export let allCourses = (req: Request, res: Response, next: NextFunction) => {

  Course.find()
  .then( courses => res.send(courses))
  .catch(next)
}

export let getCourse = (req: Request, res: Response, next: NextFunction) => {

  Course.findById(req.params.id)
  .then(course => res.send(course))
  .catch(next)
}

export let addCourse = (req: Request, res: Response, next: NextFunction) => {
  let course = new Course(req.body);

  course.save()
  .then(() => res.send(course))
  .catch(next)
}

export let deleteCourse = (req: Request, res: Response, next: NextFunction) => {
  Course.deleteOne({ _id: req.params.id })
  .then(()=>res.sendStatus(200))
  .catch(next)
}

export let updateCourse = (req: Request, res: Response, next: NextFunction) => {
  Course.findByIdAndUpdate(req.params.id, req.body)
  .then(() => res.sendStatus(200))
  .catch(next)
}