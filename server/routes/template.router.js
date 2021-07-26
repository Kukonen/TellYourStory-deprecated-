const Router = require('koa-router')
const router = new Router().prefix('/template')
const templateController = require('../controllers/template.controller')

router.get('/openorcreate', templateController.openOrCreate)
router.post('/createcounter', templateController.createCounter)
router.post('/changecounter', templateController.changeCounter)

module.exports = router.routes()