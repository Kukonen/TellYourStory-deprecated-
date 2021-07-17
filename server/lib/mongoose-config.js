const mongoose = require('mongoose')
const config = require('./config')

module.exports = () => {
    mongoose
        .connect(config.mongoURL, {useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        .then(() => console.log('MongoDB has been connected'))
        .catch(e => console.log(e))
}