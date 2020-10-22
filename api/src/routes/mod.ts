

import express from 'express'

const router = express.Router()

import * as modController from '../controllers/modController' 

router.get("/:id", modController.getMod)
router.delete("/:id", modController.deleteMod)
router.get("/", modController.searchMods)
router.post("/", modController.addMod)
router.get("/rating/:id", modController.getModRating)
router.post("/save", modController.saveMod)

export default router;