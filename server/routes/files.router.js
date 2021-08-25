const Router = require('koa-router')

const templateController = require('../controllers/template.controller')
const settingsController = require('../controllers/settings.controller')

const router = new Router().prefix('/api')

router.post('/template/changeimage', templateController.changeImage)
router.post('/settings/changeavatar', settingsController.changeAvatar)


module.exports = router