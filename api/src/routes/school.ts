
import express from 'express'

const router = express.Router()

import * as schoolController from '../controllers/schoolController' 
import { isLoggedIn } from '../middleware'

router.get("/", schoolController.searchSchools)
router.get("/:id", schoolController.getSchool)
router.post("/", isLoggedIn, schoolController.addSchool)
router.delete("/:id", isLoggedIn, schoolController.deleteSchool)
router.put("/:id", isLoggedIn, schoolController.updateSchool)

export default router;