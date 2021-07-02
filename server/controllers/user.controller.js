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
        const userDATA = req.body

        let ERROR = false;

        if (userDATA.login === '' || userDATA.password === '' || userDATA.login.indexOf('@') === -1) {
            res.json({
                status: "error",
                description: "data error"
            })
            return
        }

        const salt = '6sixty6six';

        const password = sha256((userDATA.password + salt))


        await db.findUserByEmailAndPassword(userDATA.login, password).then((response) => {
            if (response.find) {
                res.cookie('key', response.data.key, {httpOnly: true})
                res.json({
                    status: "ok"
                })
            }
            else {
                res.json({
                    status: "error",
                    description: "did not find user"
                })
            }

        }).catch(e => {
            console.log(e)
            res.json({
                status: "error",
                description: "db error"
            })
        });
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
                if (!response.find) {
                    res.json({
                        status: "error",
                        description: "did not find user"
                    })
                }
                else {
                    res.json({
                        status: "ok",
                        data: {
                            name: response.data.name,
                            avatar: response.data.avatar
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