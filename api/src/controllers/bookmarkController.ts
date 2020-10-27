import { Request, Response, NextFunction } from 'express';
import BookMark from '../models/bookmark'

export let paginateBookmarks = (req: Request, res: Response, next: NextFunction) => {

  const {
    page = "1",
    limit = "10"
  } = req.query as { page: string, limit: string }

  const { userId } = req.params

  const _page = parseInt(page)
  const _limit = parseInt(limit)

  BookMark.find({ userId })
  .limit(_limit)
  .skip((_page - 1) * _limit)
  .then(bookmarks => res.send(bookmarks))
  .catch(next)

}

export let addBookMark = (req: Request, res: Response, next: NextFunction) => {
  let bookmark = new BookMark(req.body);

  bookmark.save()
  .then(() => res.sendStatus(200))
  .catch(next)
}

export let deleteBookMark = (req: Request, res: Response, next: NextFunction) => {
  BookMark.deleteOne({ _id: req.params.id })
  .then(()=>res.sendStatus(200))
  .catch(next)
}