const Router = require('koa-router')
const router = new Router().prefix('/user')
const userController = require('../controllers/user.controller')

router.get('/getinformation', userController.getInformation)

module.exports = router.routes()