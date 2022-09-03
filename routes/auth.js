const express = require('express')
const authRouter = express.Router()
const authControllers = require('../controllers/authControllers')
const protect = require('../middleware/auth')

authRouter.route('/signUp').post(authControllers.signUp)
authRouter.route('/login').post(authControllers.login)

module.exports = authRouter;