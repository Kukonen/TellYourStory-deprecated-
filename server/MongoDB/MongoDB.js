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
}

module.exports = new MongoDB();