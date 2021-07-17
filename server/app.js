require('dotenv').config()

const Koa = require('koa');

const config = require('./lib/config')
const handlers = require('./handlers')
const routers = require('./routes/index.router')
const mongooseConfig = require('./lib/mongoose-config')

const app = new Koa();

handlers.forEach(h => app.use(h))

app.use(routers.routes())
app.use(routers.allowedMethods())
mongooseConfig()


app.listen(config.port, () => {
    console.log(`Server started on port ${config.port}`)
})

