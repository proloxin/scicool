const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postsSchema = new Schema({
    category: String,
    title: String,
    content: String,
    author: String,
    postTime: Date,
    lastTime:Date
},{timestamps: {createdAt: 'postTime', updatedAt: 'lastTime'}})

mongoose.model('postsSchema',postsSchema)