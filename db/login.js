const mongoose = require('mongoose')
const Schema = mongoose.Schema

const login_sch = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true
    }
})

const log = mongoose.model('login', login_sch)

exports = module.exports = {
    log
}