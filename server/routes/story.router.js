const Router = require('koa-router')
const router = new Router().prefix('/story')
const storyController = require('../controllers/story.controller')

router.post('/getstory', storyController.getStory)

module.exports = router.routes()