

import express from 'express'

const router = express.Router()

import * as ratingController from '../controllers/ratingController' 

router.post("/", ratingController.addRating)
router.delete("/:id", ratingController.deleteRating)
router.put("/:id", ratingController.updateRating)

export default router;