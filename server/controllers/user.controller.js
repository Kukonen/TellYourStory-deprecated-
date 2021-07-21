const User = require('../models/User')
const Problems = require('../models/Problems')
const uuid = require('uuid')

class userController {
    async getInformation(ctx) {
        const key = ctx.cookies.get('key')
        if (!key)
            return;
        const user = await User.findOne({key: key})
        if (!user)
            return;
        ctx.status = 200
        ctx.body = {
            "name": user.name,
            "avatar": user.avatar
        }
    }

    async logout(ctx) {
        ctx.cookies.set('key', null)
    }

    async sendProblem(ctx) {
        const {title, text} = ctx.request.body
        const id = uuid.v4()
        await new Problems({id, title, text}).save()
            .then(() => {
                ctx.status = 201
            })
            .catch(e => {
                console.log(e)
                ctx.throw(501, "User can't create")
            })
    }
}

module.exports = new userController();