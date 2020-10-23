

import express from 'express'

const router = express.Router()

import * as ratingController from '../controllers/ratingController' 
import { isLoggedIn } from '../middleware'

router.post("/", isLoggedIn, ratingController.addRating)
router.delete("/:id", isLoggedIn, ratingController.deleteRating)
router.put("/:id", isLoggedIn, ratingController.updateRating)

export default router;