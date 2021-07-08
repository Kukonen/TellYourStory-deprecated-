const sha256 = require('js-sha256');
const db = require('../MongoDB/MongoDB')

class ProfileController {
    async changeName(req, res) {
        const name = req.body.name
        const key = req.cookies.key
        await db.updateByKey(key, {name: name}).then(response => {
            if (!response.find) {
                res.json({
                    status: "error",
                    description: "did not find user"
                })
            }
            else {
                res.json({
                    status: "ok"
                })
            }
        }).catch(e => {
            console.log(e)
            res.json({
                status: "error",
                description: "request error"
            })
        })
    }

    async changePassword(req, res) {
        let newPassword = req.body.newPassword
        let lastPassword = req.body.lastPassword
        const key = req.cookies.key

        let success = false

        let responsePassword = null

        await db.findUserByKey(key).then(response => {
            if (!response.find) {
                res.json({
                    status: "error",
                    description: "did not find user"
                })
            }
            else {
                success = true
                responsePassword = response.data.password
            }
        }).catch(e => {
            console.log(e)
            res.json({
                status: "error",
                description: "request error"
            })
        })

        if(!success)
            return

        const salt = '6sixty6six';

        lastPassword = sha256((lastPassword + salt))
        newPassword = sha256((newPassword + salt))

        if(lastPassword !== responsePassword)
        {
            res.json({
                status: "error",
                description: "passwords not equal"
            })
            return
        }

        await db.updateByKey(key, {
            password: newPassword
        }).then(response => {
            if (!response.find) {
                res.json({
                    status: "error",
                    description: "did not find user"
                })
            }
            else {
                res.json({
                    status: "ok"
                })
            }
        }).catch(e => console.log(e))
    }
}

module.exports = new ProfileController();