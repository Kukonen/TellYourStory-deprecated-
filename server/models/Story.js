const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const problemsSchema = new Schema({
    key: {
        type: String,
        required: false
    },
    id: {
        type: String,
        required: false,
        unique: true
    },
    struct: {
        id: {
            type: String,
            required: false,
            unique: true
        },
        title: {
            type: String,
            required: false,
            default: ""
        },
        story: {
            type: Array,
            required: false,
            default: []
        },
        chapter: {
            type: Array,
            required: false,
            default: []
        },
        counter: {
            type: Array,
            required: false,
            default: []
        }
    },
    rating: {
        type: Number,
        required: false,
        default: 0
    },
    comments: {
        type: Array,
        required: false,
        default: []
    }
});

module.exports = mongoose.model('story', problemsSchema);