
import express from 'express'

const router = express.Router()

import * as courseController from '../controllers/courseController' 

router.get("/:id", courseController.getCourse)
router.put("/", courseController.addCourse)
router.delete("/:id", courseController.deleteCourse)
router.post("/:id", courseController.updateCourse)

export default router;