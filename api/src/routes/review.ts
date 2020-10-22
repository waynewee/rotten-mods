

import express from 'express'

import { isLoggedIn } from '../middleware'

const router = express.Router()

import * as reviewController from '../controllers/reviewController' 

router.get("/", reviewController.getAllReviews)
router.get("/:modId", reviewController.getReview)
router.get("/replies/:id", reviewController.getAllReviewReplies)
router.post("/", isLoggedIn, reviewController.addReview)
router.delete("/:id", reviewController.deleteReview)
router.put("/:id", reviewController.updateReview)

export default router;