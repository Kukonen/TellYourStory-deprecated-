const Router = require('koa-router')

const authRouter = require('./auth.router')
const userRouter = require('./user.router')
const templateRouter = require('./template.router')
const profileRouter = require('./profile.router')

const router = new Router().prefix('/api')

router.use(authRouter)
router.use(userRouter)
router.use(templateRouter)
router.use(profileRouter)

module.exports = router