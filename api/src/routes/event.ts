


import express from 'express'

const router = express.Router()

import * as eventController from '../controllers/eventController' 

router.put("/", eventController.addEvent)

export default router;