const User = require('../models/User')
const bcrypt = require('bcryptjs')
const uuid = require("uuid");
const fs = require("fs");

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

    async changeAvatar(ctx) {
        const key = ctx.cookies.get('key')
        const data = ctx.request.fields
        const fileName = uuid.v4() + '.jpg'
        fs.rename(data.file[0].path,
            "C:\\Users\\evgen\\Desktop\\react-apps\\TellYourStory\\server\\static\\avatars" + "\\" + fileName,
            async () => {
                await User.updateOne({key}, {avatar: fileName})
            })
        ctx.body = {
            "avatar": fileName
        }
        ctx.status = 200
    }
}

module.exports = new SettingsController();