const User = require('../models/User')

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
}

module.exports = new userController();