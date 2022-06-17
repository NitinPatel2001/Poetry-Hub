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
    },
    // likes: {
    //     type: Number,
    //     required: true,
    // }
})

// const like_sh = new Schema({
//     user: {
//         type: String,
//         required: true
//     },
//     post: {
//         type: String,
//         required: true
//     }
// })

const poetry = mongoose.model('post',post_sch)
// const liker = mongoose.model('like',like_sh)

exports = module.exports = {
    poetry,
    // liker
}
