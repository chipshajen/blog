const express = require('express')
const app = express()
require('dotenv').config()

const userRouter = require('./routes/userRouter')
const postRouter = require('./routes/postRouter')

app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.use('/user', userRouter)
app.use('/posts', postRouter)

app.get('/', (req, res) => {
    res.json({"msg": "hello"})
})

app.post('/login', (req, res) => {
    console.log((req.body.msg))
    res.sendStatus(200)
})


const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`)
})