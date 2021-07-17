const config = require('./config')
const User = require('../models/User')
const {Strategy, LocalStrategy} = require('passport')

module.exports = (passport) => {
    passport.use('some ',new Strategy(async (payload, done) => {
        const user = await User.f
    }))
}