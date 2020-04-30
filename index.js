const Koa = require('koa')
const app = new Koa()
const route = require('koa-route')
const serve = require('koa-static')
const path = require("path")

const home = serve(path.join(__dirname)+'/public/')

const hello = ctx =>{
    ctx.body = 'hello world'
}

app.use(home)
app.use(route.get('/',hello))

app.listen(process.env.PORT || 3000,()=>{
    console.log('sever running ');
})