const mongoose = require('mongoose')
const uuid = require('uuid');

const users = require('./models/Users')

class MongoDB {
    constructor() {
        mongoose.connect('mongodb://localhost:27017/TellYourStory',
            {
                useNewUrlParser: true,
                useFindAndModify: false,
                useCreateIndex: true,
                useUnifiedTopology: true
        })
    }

    async addUser(name, email, password) {
        let key = uuid.v4()
        const id = uuid.v4()
        const User = new users({
            id: id,
            key: key,
            name: name,
            email: email,
            password: password
        })
        await User.save().then().catch(e => {
            console.log(e)
            return null
        })
        return key
    }
    async findUserByKey(key) {
        let error = false
        let data = {}
        await users.find({key: key}, (err, userDATA) => {
            if (err)
                error = true;
            if (userDATA.length !== 0)
                data = {
                    find: true,
                    data: JSON.parse(JSON.stringify(userDATA[0]))
                }
            else
                data = {
                    find: false
                }
        }).then()
        return data
    }

    async findUserByEmailAndPassword(email, password) {
        let error = false
        let data = {}
        await users.find({email: email, password: password}, (err, userDATA) => {
            if (err)
                error = true;
            if (userDATA.length !== 0)
                data = {
                    find: true,
                    data: JSON.parse(JSON.stringify(userDATA[0]))
                }
            else
                data = {
                    find: false
                }
        }).then()
        return data
    }
}

module.exports = new MongoDB();