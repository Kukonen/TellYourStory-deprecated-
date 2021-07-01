const Route = require('express')
const route = new Route()
const userController = require('../controllers/user.controller')

route.post('/register', userController.register)
route.post('/login', userController.login)

module.exports = route;