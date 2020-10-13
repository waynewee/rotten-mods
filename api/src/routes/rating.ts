

import express from 'express'

const router = express.Router()

import * as ratingController from '../controllers/ratingController' 

router.put("/rating", ratingController.addRating)
router.delete("/rating/:id", ratingController.deleteRating)
router.post("/rating/:id", ratingController.updateRating)

export default router;