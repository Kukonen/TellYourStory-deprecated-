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
            }).catch(e => console.log(e));
        }
        else {
            console.log("error")
        }



    }
    async login(req, res) {

    }
}

module.exports = new userController();