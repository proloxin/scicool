const mongoose = require('mongoose')
const Schema = mongoose.Schema

const subPostsSchema = new Schema({
    content: String,
    pid: String,
    author: String,
    postTime: Date,
},{timestamps: {createdAt: 'postTime'}})

mongoose.model('subPostsSchema',subPostsSchema)