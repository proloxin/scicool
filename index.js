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
const cors = require('koa-cors')
const home = serve(path.join(__dirname)+'/public/')
const mobi = serve(path.join(__dirname)+'/mobile/')
const fs = require('fs')
// app.use(home)
// app.use(mobi)

app.use(cors({
    origin: function (ctx) {
        return "*"
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}))
app.use(bodyparser())


router.get("/",async(ctx)=> {
    let machine = getMachine(ctx.request);
    if(machine=='PC'){
        app.use(home)
        ctx.set('Content-Type', "text/html;charset=utf-8")
        ctx.body = fs.createReadStream('./public/index.html')
    }else{
        app.use(mobi)
        ctx.set('Content-Type', "text/html;charset=utf-8")
        ctx.body = fs.createReadStream('./mobile/index.html')
    }
    
})

function getMachine(req) {
    var deviceAgent = req.headers["user-agent"].toLowerCase();
    var agentID = deviceAgent.match(/(iphone|ipod|ipad|android)/);
    if (agentID) {
        return "Mobile";
    } else {
        return "PC";
    }
}

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