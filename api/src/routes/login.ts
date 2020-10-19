
import express from 'express'

const router = express.Router()

import * as loginController from '../controllers/loginController' 

router.post('/login', loginController.login)

export default router;