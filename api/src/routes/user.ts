
import express from 'express'

const router = express.Router()

import * as userController from '../controllers/userController' 

router.get("/:id", userController.getUser)
router.post("/", userController.addUser)
router.delete("/:id", userController.deleteUser)
router.put("/:id", userController.updateUser)
router.get("/saved-mods/:id", userController.getUserSavedMods)

export default router;