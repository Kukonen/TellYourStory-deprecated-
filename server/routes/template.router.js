const Router = require('koa-router')
const router = new Router().prefix('/template')
const templateController = require('../controllers/template.controller')

router.get('/openorcreate', templateController.openOrCreate)
router.post('/createchapter', templateController.createChapter)
router.post('/changechapter', templateController.changeChapter)
router.post('/deletechapter', templateController.deleteChapter)
router.post('/createdecision', templateController.createDecision)
router.post('/createcounter', templateController.createCounter)
router.post('/changecounter', templateController.changeCounter)
router.post('/deletecounter', templateController.deleteCounter)

module.exports = router.routes()