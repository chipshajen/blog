const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()

const passport = require('./config/passport')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const userRouter = require('./routes/userRouter')
const postRouter = require('./routes/postRouter')
const authRouter = require('./routes/authRouter')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(cors())
app.use(passport.initialize())

app.use('/auth', authRouter)
app.use('/user', userRouter)
app.use('/posts', postRouter)

app.post('/login', (req, res) => {
    console.log((req.body.msg))
    res.sendStatus(200)
})


const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`)
})