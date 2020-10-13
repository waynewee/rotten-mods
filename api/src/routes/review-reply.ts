

import express from 'express'

const router = express.Router()

import * as reviewReplyController from '../controllers/reviewReplyController' 

router.put("/review-reply", reviewReplyController.addReviewReply)
router.post("/review-reply", reviewReplyController.updateReviewReply)
router.delete("/review-reply", reviewReplyController.deleteReviewReply)

export default router;