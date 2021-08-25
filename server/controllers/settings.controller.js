const User = require('../models/User')
const bcrypt = require('bcryptjs')

class SettingsController {

    async changeName(ctx) {
        try {
            const key = ctx.cookies.get('key')
            const {name} = ctx.request.body

            await User.updateOne({key}, {name: name})

            ctx.body

            ctx.status = 200
        } catch (e) {
            console.log(e)
        }
    }

    async changePassword(ctx) {
        try {
            const key = ctx.cookies.get('key')
            const {oldPassword, newPassword} = ctx.request.body

            const user = await User.findOne({key})

            const passwordMatch = await bcrypt.compare(oldPassword, user.password)

            if (passwordMatch) {
                const salt = await bcrypt.genSalt(10)
                const hash = await bcrypt.hash(newPassword, salt)

                await User.updateOne({key}, {password: hash})
                ctx.status = 200
            } else {
                ctx.throw(400, "Password does not match")
            }

            ctx.body

            ctx.status = 200
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new SettingsController();