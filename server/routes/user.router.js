const Router = require('koa-router')
const router = new Router().prefix('/user')
const userController = require('../controllers/user.controller')

router.get('/getinformation', userController.getInformation)
router.get('/logout', userController.logout)
router.post('/sendproblem', userController.sendProblem)

module.exports = router.routes()