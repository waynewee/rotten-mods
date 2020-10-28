


import express from 'express'

const router = express.Router()

import * as eventController from '../controllers/eventController' 

router.post("/", eventController.addEvent)
router.get("/", eventController.findEvent)

export default router;