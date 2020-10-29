
import express from 'express'

const router = express.Router()

import * as bookmarkController from '../controllers/bookmarkController' 
import { isLoggedIn } from '../middleware'

router.get("/user/:userId", bookmarkController.paginateBookmarks)
router.post("/",isLoggedIn, bookmarkController.addBookMark)
router.delete("/:id", isLoggedIn, bookmarkController.deleteBookMark)

export default router;