const Router = require('koa-router')

const authRouter = require('./auth.router')

const router = new Router().prefix('/api')

router.use(authRouter)

module.exports = router