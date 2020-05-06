const Koa = require('koa')
const app = new Koa()
const Router = require('koa-router')
const bodyparser = require('koa-bodyparser')
const serve = require('koa-static')
const path = require("path")
let router = new Router()
let posts = require('./api/Posts')
let subPosts = require('./api/subPosts')
const {connect,initSchemas} = require('./database/init')

const home = serve(path.join(__dirname)+'/public/')
app.use(home)

app.use(bodyparser())

;(async()=>{
    await connect()
    initSchemas()
})()

router.use('/api/posts',posts.routes())
router.use('/api/subPosts',subPosts.routes())
app.use(router.routes())

app.listen(process.env.PORT || 3000,()=>{
    console.log('sever running ');
})