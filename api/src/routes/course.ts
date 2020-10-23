
import express from 'express'

const router = express.Router()

import * as courseController from '../controllers/courseController' 

router.get("/", courseController.allCourses)
router.get("/:id", courseController.getCourse)
router.post("/", courseController.addCourse)
router.delete("/:id", courseController.deleteCourse)
router.put("/:id", courseController.updateCourse)

export default router;