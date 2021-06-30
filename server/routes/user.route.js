const Route = require('express')
const route = Route()
const userController = require('../controllers/user.controller')

route.post('/register', userController.register)
route.post('/', userController.login)

module.exports = route;