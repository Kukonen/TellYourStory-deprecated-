const bodyParser = require('./body-parser')
const errors = require('./errors')
const passportInit = require('./passport-init')
const formDataParser = require('./formdata-parser')

module.exports = [
    bodyParser,
    errors,
    passportInit,
    formDataParser
]