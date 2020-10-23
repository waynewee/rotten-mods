

import express from 'express'

import { isLoggedIn } from '../middleware'

const router = express.Router()

import * as replyController from '../controllers/replyController' 

router.get("/review/:reviewId", replyController.getRepliesByReviewId)
router.get("/:id", replyController.getReply)
router.post("/", isLoggedIn, replyController.addReply)
router.delete("/:id", replyController.deleteReply)
router.put("/:id", replyController.updateReply)

export default router;