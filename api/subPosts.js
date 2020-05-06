const Router = require('koa-router')
let router = new Router()
const mongoose = require('mongoose')

router.get('/getReList',async(ctx)=>{
    let page = ctx.query.page
    let pid = ctx.query.pid
    let per = 10
    try {
        const subPostsSchema = mongoose.model('subPostsSchema')
        let res = await subPostsSchema.find({pid:pid}).sort('-postTime').limit(per).skip((page-1)*per)
        ctx.body = {
            code : 200,
            data : res
        }
    } catch (error) {
        ctx.body = {
            code : 500,
            data : error
        }
    }
})

router.post('/submitRe',async(ctx)=>{
    let {pid, content, author} =ctx.request.body
    const subPostsSchema = mongoose.model('subPostsSchema')
    await subPostsSchema.create({
        pid: pid,
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

module.exports = router