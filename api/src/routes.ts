import express from 'express'

const router = express.Router()

import eventRoutes from './routes/event'
import loginRoutes from './routes/login'
import modRoutes from './routes/mod'
import ratingRoutes from './routes/rating'
import reviewRoutes from './routes/review'
import reviewReplyRoutes from './routes/review-reply'
import userRoutes from './routes/user'
import courseRoutes from './routes/course'
import schoolRoutes from './routes/school'

router.use('/course', courseRoutes)
router.use('/event', eventRoutes)
router.use('/loginRoutes', loginRoutes)
router.use('/mod', modRoutes)
router.use('/user', userRoutes)
router.use('/rating', ratingRoutes)
router.use('/review', reviewRoutes)
router.use('/review-reply', reviewReplyRoutes)
router.use('/school', schoolRoutes)

export default router