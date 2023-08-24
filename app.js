const express = require('express')
const dotenv = require('dotenv')

const app = express()

const { getIPAdress } = require('./utils/os')
const logger = require('./middleware/logger')
const ErrorCatch = require('./middleware/err.handler')
const ApiRouter = require('./routes')
const connectDB = require('./config/db.mongoose')
/**
 * 设置环境端口
 */
dotenv.config({
    path: './config/config.env'
})

// 链接数据库
// connectDB()

console.log(connectDB)

const port = process.env.PORT || 3000
// app.use('/v1/api', express.static('public'))
app.get('/', (req, res) => {
    res.status(200).json({ success: true, msg: 'Hello World!' })
})

/**
 * 静态资源模版
 */
// const path = require('path')
// const publicDir = path.join(__dirname, 'public')
// app.use(express.static(publicDir))

/**
 * 创建中间件
 */
app.all('*', logger)
// 错误处理中间件
// app.use(ErrorCatch)
/**
 *  挂载路由地址
 */
app.use(ApiRouter)

/**
 * 监听服务
 */
const server = app.listen(port, () => {
    console.log(`服务运行在 http://${getIPAdress()}:${port}`)
})

// 设置服务永不超时
server.setTimeout(0)
