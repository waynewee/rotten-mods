import express from 'express'

const router = express.Router()

import modRouter from './mod-router'
import bookmarkRouter from './bookmark-router'
import userRouter from './user-router'
import schoolRouter from './school-router'
import courseRouter from './course-router'
import loginRouter from './login-router'
import plannedModRouter from './planned-mod-router'
import eventRouter from './event-router'
import ratingRouter from './rating-router'
import logoutRouter from './logout-router'
import reviewRouter from './review-router'
import replyRouter from './reply-router'
import reactionRouter from './reaction-router'
import recommendationRouter from './recommendation-router'

router.all('/mod', modRouter)
router.all('/mod/:id', modRouter)

router.all('/bookmark', bookmarkRouter)
router.all('/bookmark/:id', bookmarkRouter)

router.all('/user', userRouter)
router.all('/user/:id', userRouter)

router.all('/login', loginRouter)
router.use('/logout', logoutRouter)

router.all('/school', schoolRouter)
router.all('/school/:id', schoolRouter)

router.all('/course', courseRouter)
router.all('/course/:id', courseRouter)

router.all('/planned-mod', plannedModRouter)
router.all('/planned-mod/:id', plannedModRouter)

router.all('/event', eventRouter)

router.all('/rating', ratingRouter)
router.all('/rating/:id', ratingRouter)

router.all('/review', reviewRouter)
router.all('/review/:id', reviewRouter)

router.all('/reply', replyRouter)
router.all('/reply/:id', replyRouter)

router.all('/reaction', reactionRouter)
router.all('/reaction/:id', reactionRouter)

router.all('/recommendation', recommendationRouter)

export default router