const Router = require('koa-router')

const templateController = require('../controllers/template.controller')

const router = new Router().prefix('/api')

router.post('/template/changeimage', templateController.changeImage)

module.exports = router