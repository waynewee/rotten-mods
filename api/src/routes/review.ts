

import express from 'express'

import { isLoggedIn } from '../middleware'

const router = express.Router()

import * as reviewController from '../controllers/reviewController' 

router.get("/", reviewController.getAllReviews)
router.get("/:id", reviewController.getReview)
router.get("/replies/:id", reviewController.getAllReviewReplies)
router.put("/", isLoggedIn, reviewController.addReview)
router.delete("/:id", reviewController.deleteReview)
router.post("/:id", reviewController.updateReview)

export default router;