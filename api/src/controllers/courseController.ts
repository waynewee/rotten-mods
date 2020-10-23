import { Request, Response, NextFunction } from 'express';
import Course from '../models/course'

export let searchCourses = (req: Request, res: Response, next: NextFunction) => {

  const {
    s = "",
    page = "1",
    limit = "10"
  } = req.query as { s: string, page: string, limit: string }

  const _page = parseInt(page)
  const _limit = parseInt(limit)

  Course.find({
    $or: [
      { name: { $regex: s, $options: 'i' } }
    ]
  })
  .limit(_limit)
  .skip((_page - 1) * _limit)
  .then(courses => res.send(courses))
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
  .then(() => res.sendStatus(200))
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