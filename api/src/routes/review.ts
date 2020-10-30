

import express from 'express'

import { isLoggedIn } from '../middleware'

const router = express.Router()

import * as reviewController from '../controllers/reviewController' 

router.get("/", reviewController.getAllReviews)
router.get("/:id", reviewController.getReview)
router.get("/mod/:modId", reviewController.getReviewsByModId)
router.get("/user/:userId", reviewController.getReviewsByUserId)
router.post("/", isLoggedIn, reviewController.addReview)
router.delete("/:id", isLoggedIn, reviewController.deleteReview)
router.put("/:id", isLoggedIn, reviewController.updateReview)

export default router;