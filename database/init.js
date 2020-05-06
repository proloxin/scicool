const mongoose = require('mongoose')
const db = 'mongodb://lox1n:prol0x1n@ds125914.mlab.com:25914/heroku_spt6m41m'
const glob = require('glob')
const {resolve} = require('path')

//引入所有的js的函数，并将这个函数导出
exports.initSchemas = ()=>{
    glob.sync(resolve(__dirname,'./schema/','**/*.js')).forEach(require)
}

exports.connect = ()=>{
    mongoose.set('useCreateIndex', true)
    mongoose.connect(db,{ useNewUrlParser: true, useUnifiedTopology: true  })

    let maxConnectTime = 0

    return new Promise((resolve,reject)=>{
        
        mongoose.connection.on('disconnected',()=>{
            //进行重连
            if (maxConnectTime<3){
                mongoose.connect(db)
                maxConnectTime++
            }else{
                reject()
                throw new Error('数据库出现问题，程序无法搞定，请人为修理......')
            }
        })


        mongoose.connection.on('error',err=>{
            console.log('***********数据库错误***********')
            if(maxConnectTimes<3){
                maxConnectTimes++
                mongoose.connect(db)   
            }else{
                reject(err)
                throw new Error('数据库出现问题，程序无法搞定，请人为修理......')
            }

        })

        //链接打开的时
        mongoose.connection.once('open',()=>{
            console.log('MongoDB connected successfully') 
            resolve()   
        })
    
    })

}