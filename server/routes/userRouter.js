const { Router } = require('express')
const userRouter = Router()
const { getUser } = require('../controllers/userController')

userRouter.get('/', getUser)


module.exports = userRouter