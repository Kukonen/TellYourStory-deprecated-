const Router = require('koa-router')
const router = new Router().prefix('/settings')
const settingsController = require('../controllers/settings.controller')

router.post('/changename', settingsController.changeName)
router.post('/changepassword', settingsController.changePassword)

module.exports = router.routes()