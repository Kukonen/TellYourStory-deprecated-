require('dotenv').config()

const Koa = require('koa');
const koaStatic = require('koa-static')
const config = require('./lib/config')
const handlers = require('./handlers')
const routers = require('./routes/index.router')
const mongooseConfig = require('./lib/mongoose-config')
const body = require("koa-better-body");
const filesRouter = require('./routes/files.router')

const app = new Koa();

handlers.forEach(h => app.use(h))

app.use(koaStatic(__dirname + '/static'));
app.use(routers.routes()) // Default routers
app.use(routers.allowedMethods())
app.use(body())
app.use(filesRouter.routes()) // File routers

mongooseConfig()

app.listen(config.port, () => {
    console.log(`Server started on port ${config.port}`)
})

