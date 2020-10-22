
import express from 'express'

const router = express.Router()

import * as schoolController from '../controllers/schoolController' 

router.get("/", schoolController.allSchools)
router.get("/:id", schoolController.getSchool)
router.put("/", schoolController.addSchool)
router.delete("/:id", schoolController.deleteSchool)
router.post("/:id", schoolController.updateSchool)

export default router;