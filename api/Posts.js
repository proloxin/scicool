const Router = require('koa-router')
let router = new Router()
const mongoose = require('mongoose')

router.get('/getPostList',async(ctx)=>{
    let page = ctx.query.page
    let author = ctx.query.author 
    let category = ctx.query.category
    let per = 10
    try {
        let findTerms = {}
        if (author) findTerms = {author: author}
        if (category) findTerms = {category: category}
        if (author && category) findTerms={author: author,category: category} 
        const postsSchema = mongoose.model('postsSchema')
        let res = await postsSchema.find(findTerms).sort('-lastTime').limit(per).skip((page-1)*per) 
        ctx.body = {
            code : 200,
            data : res
        }
    } catch (error) {
        console.log(error)
        ctx.body = {
            code : 500,
            data : error
        }
    }
})

router.post('/submitPost',async(ctx)=>{
    let {category, title, content, author} =ctx.request.body
    const postsSchema = mongoose.model('postsSchema')
    await postsSchema.create({
        category : category,
        title : title,
        content : content,
        author :author
    }).then(()=>{
        ctx.body = {
            code : 200,
            data : 'ok'
        }
    }).catch(err=>{
        ctx.body = {
            code : 500,
            data : err
        }
    })
})

router.post('/updateLastTime',async(ctx)=>{
    let pid = ctx.request.body.pid
    const postsSchema = mongoose.model('postsSchema')
    await postsSchema.updateOne({"_id":pid},{lastTime:new Date()}).then(()=>{
        ctx.body = {
            code : 200,
            data : 'ok'
        }
    }).catch(err=>{
        ctx.body = {
            code : 500,
            data : err
        }
    })
})

module.exports = router