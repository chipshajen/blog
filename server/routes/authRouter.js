const { Router } = require('express')
const authRouter = Router()
const bcrypt = require('bcryptjs')
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const jwt = require('jsonwebtoken')
const passport = require('passport')
require('dotenv').config()

authRouter.post('/register', async(req, res) => {
    const { username, password, email } = req.body

    const matchedUser = await prisma.user.findFirst({
        where: {
            username: username
        }
    })

    console.log(matchedUser)

    if(matchedUser) res.json({"msg": "User with that name already exists"})
        
        const matchedEmail = await prisma.user.findFirst({
        where: {
            email: email
        }
    })

    console.log(matchedEmail)

    if(matchedEmail) res.json({"msg": "Account with that email already exists"})

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await prisma.user.create({
        data: {
            username,
            email,
            password: hashedPassword
        }
    })
    console.log("Succesfully created user")
    res.json(JSON.stringify({user}))
})

authRouter.post('/login', async(req, res) => {
    const { username, password } = req.body

    const user = await prisma.user.findFirst({
        where: {
            username: username
        }
    })

    if(!user){
        return res.json({"msg": "User does not exist"})
    }

    const matchingPassword = await bcrypt.compare(password, user.password)

    if(!matchingPassword){
        return res.json({"msg": "Incorrect password"})
    }

    const token = jwt.sign({id: user.id, username: user.username}, process.env.JWT_SECRET, {expiresIn: '1h'})

    return res.json({token, username: username})
})

authRouter.get('/validate', passport.authenticate('jwt', { session: false }), (req, res) => {
    if (!req.user) {
        return res.status(401).json({ valid: false, msg: "Unauthorized" });
    }
    console.log("User validated:", req.user.username);
    res.json({ valid: true, username: req.user.username });
});

module.exports = authRouter