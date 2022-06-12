const mongoose = require('mongoose')
const Schema = mongoose.Schema

const post_sch = new Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    user: {
        type: String,
        required: true
    }
})

const poetry = mongoose.model('post',post_sch)

exports = module.exports = {
    poetry
}
