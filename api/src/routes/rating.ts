

import express from 'express'

const router = express.Router()

import * as ratingController from '../controllers/ratingController' 
import { isLoggedIn } from '../middleware'

router.post("/", isLoggedIn, ratingController.addRating)
router.delete("/", isLoggedIn, ratingController.deleteRating)
router.put("/:id", isLoggedIn, ratingController.updateRating)
router.get("/find", ratingController.findRating)

export default router;