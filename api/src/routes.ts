import express from 'express'

const router = express.Router()

import eventRoutes from './routes/event'
import loginRoutes from './routes/login'
import modRoutes from './routes/mod'
import ratingRoutes from './routes/rating'
import replyRoutes from './routes/reply'
import reviewRoutes from './routes/review'
import userRoutes from './routes/user'
import courseRoutes from './routes/course'
import schoolRoutes from './routes/school'

router.use('/course', courseRoutes)
router.use('/event', eventRoutes)
router.use('/login', loginRoutes)
router.use('/mod', modRoutes)
router.use('/user', userRoutes)
router.use('/rating', ratingRoutes)
router.use('/reply', replyRoutes)
router.use('/review', reviewRoutes)
router.use('/school', schoolRoutes)

export default router