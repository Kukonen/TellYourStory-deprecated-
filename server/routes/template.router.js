const Router = require('koa-router')
const router = new Router().prefix('/template')
const userController = require('../controllers/template.controller')

router.get('/openorcreate', userController.openOrCreate)

module.exports = router.routes()