const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const passport = require('passport')
const dotenv = require('dotenv').config()

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET
}

passport.use(new JwtStrategy(options, async(jwt_payload, done) => {
    const user = await prisma.user.findFirst({
        where: {
            id: jwt_payload.id
        }
    })
    if (user) {
        return done(null, user)
    } else {
        return done(null, false)
    }
}))

module.exports = passport
