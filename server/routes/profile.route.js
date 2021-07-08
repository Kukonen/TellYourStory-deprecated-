const Route = require('express')
const route = new Route()
const userController = require('../controllers/profile.controller')

route.post('/changename', userController.changeName)
route.post('/changepassword', userController.changePassword)

module.exports = route;