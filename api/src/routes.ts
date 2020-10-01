import express from 'express'

const router = express.Router()

import * as userController from './controllers/userController' 
import * as modController from './controllers/modController' 
import * as courseController from './controllers/courseController'
import * as eventController from './controllers/eventController'
import * as loginController from './controllers/loginController'
import * as ratingController from './controllers/ratingController'
import * as reviewController from './controllers/reviewController'
import * as schoolController from './controllers/schoolController'

router.post('/login', loginController.login)

router.get("/user", userController.allUsers)
router.get("/user/:id", userController.getUser)
router.put("/user", userController.addUser)
router.delete("/user/:id", userController.deleteUser)
router.post("/user/:id", userController.updateUser)

router.get("/mod/:id", modController.getMod)
router.delete("/mod/:id", modController.deleteMod)
router.get("/mod", modController.searchMods)
router.put("/mod", modController.addMod)

router.put("/event", eventController.addEvent)

router.get("/rating/:id", ratingController.getRating)
router.put("/rating", ratingController.addRating)
router.delete("/rating/:id", ratingController.deleteRating)
router.post("/rating/:id", ratingController.updateRating)

router.get("/review", reviewController.allReviews)
router.get("/review/:id", reviewController.getReview)
router.put("/review", reviewController.addReview)
router.delete("/review/:id", reviewController.deleteReview)
router.post("/review/:id", reviewController.updateReview)

export default router