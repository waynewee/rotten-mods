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
import * as reviewReplyController from './controllers/reviewReplyController'

router.post('/login', loginController.login)

router.get("/user/:id", userController.getUser)
router.put("/user", userController.addUser)
router.delete("/user/:id", userController.deleteUser)
router.post("/user/:id", userController.updateUser)
router.get("/user/saved-mods/:id", userController.getUserSavedMods)

router.get("/mod/:id", modController.getMod)
router.delete("/mod/:id", modController.deleteMod)
router.get("/mod", modController.searchMods)
router.put("/mod", modController.addMod)
router.get("/mod/rating/:id", modController.getModRating)
router.put("/mod/save", modController.saveMod)

router.put("/event", eventController.addEvent)

router.put("/rating", ratingController.addRating)
router.delete("/rating/:id", ratingController.deleteRating)
router.post("/rating/:id", ratingController.updateRating)

router.get("/review", reviewController.getAllReviews)
router.get("/review/:id", reviewController.getReview)
router.get("/review/replies/:id", reviewController.getAllReviewReplies)
router.put("/review", reviewController.addReview)
router.delete("/review/:id", reviewController.deleteReview)
router.post("/review/:id", reviewController.updateReview)

router.put("/review-reply", reviewReplyController.addReviewReply)
router.post("/review-reply", reviewReplyController.updateReviewReply)
router.delete("/review-reply", reviewReplyController.deleteReviewReply)

export default router