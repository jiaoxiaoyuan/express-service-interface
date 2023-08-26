const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db.mongo')
const app = express()

const { getIPAdress } = require('./utils/os')
const logger = require('./middleware/logger')
const ErrorCatch = require('./middleware/err.handler')
const ApiRouter = require('./routes')
// const connectDB = require('./config/db.js')
/**
 * 设置环境端口
 */
dotenv.config({
    path: './config/config.env'
})
const port = process.env.PORT || 3000

// 链接数据库
// connectDB()

// 跨域中间件
const cors = require('cors')
app.use(cors())

// 配置解析表单数据的中间件，注意：只能解析application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))

// 配置解析json数据的中间件
// app.use(express.json())

// 公共资源访问
app.get('/', (req, res) => {
    res.status(200).json({ success: true, msg: 'Hello World!' })
})

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
