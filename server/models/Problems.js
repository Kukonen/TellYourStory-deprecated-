const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const problemsSchema = new Schema({
    id: {
        type: String,
        required: false,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('problems', problemsSchema);