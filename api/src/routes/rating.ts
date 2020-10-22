

import express from 'express'

const router = express.Router()

import * as ratingController from '../controllers/ratingController' 

router.post("/rating", ratingController.addRating)
router.delete("/rating/:id", ratingController.deleteRating)
router.put("/rating/:id", ratingController.updateRating)

export default router;