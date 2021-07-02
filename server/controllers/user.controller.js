const sha256 = require('js-sha256');
const db = require('../MongoDB/MongoDB')


class userController {
    async register(req, res) {
        const userDATA = req.body

        let ERROR = false;


        const salt = '6sixty6six';

        let password = {}
        if (userDATA.password === userDATA.passwordAgain)
            password = sha256((userDATA.password + salt))
        else
            ERROR = true

        if (userDATA.email.indexOf('@') === -1)
            ERROR = true

        if(!ERROR) {
            await db.addUser(userDATA.name, userDATA.email, password).then((response) => {
                res.cookie('key', response, {httpOnly: true})
                res.json({
                    status: "ok"
                })
            }).catch(e => {
                console.log(e)
                res.json({
                    status: "error",
                    description: "db error"
                })
            });
        }
        else {
            res.json({
                status: "error",
                description: "data error"
            })
        }
    }
    async login(req, res) {

    }
    // async resetKey(req, res) {
    //     res.clearCookie('key', {path: '/'})
    //     res.json({
    //         status: "ok"
    //     })
    // }
    async getUserData(req, res) {
        if (req.cookies.key !== undefined) {
            await db.findUserByKey(req.cookies.key).then(response => {
                if (response.status === "error") {
                    res.json({
                        status: "error",
                        description: "db error"
                    })
                }
                else {
                    res.json({
                        status: "ok",
                        data: {
                            name: response.name,
                            avatar: response.avatar
                        }
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
        else {
            res.json({
                status: "error",
                description: "key error"
            })
        }
    }
    async logout(req, res) {
        res.clearCookie('key', '/')
        res.json({
            status: "ok"
        })
    }
}

module.exports = new userController();