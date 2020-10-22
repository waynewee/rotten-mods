

import express from 'express'

const router = express.Router()

import * as reviewReplyController from '../controllers/reviewReplyController' 

router.post("/", reviewReplyController.addReviewReply)
router.put("/", reviewReplyController.updateReviewReply)
router.delete("/", reviewReplyController.deleteReviewReply)

export default router;