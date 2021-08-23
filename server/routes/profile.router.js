const Router = require('koa-router')
const router = new Router().prefix('/profile')
const profileController = require('../controllers/profile.controller')

router.get('/getownstories', profileController.getOwnStories)

module.exports = router.routes()