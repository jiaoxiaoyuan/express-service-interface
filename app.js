const express = require('express')
const dotenv = require('dotenv')

const app = express()

const { getIPAdress } = require('./utils/os')

const logger = require('./middleware/logger')
// const morgan = require('./middleware/morgan')
/**
 * 设置环境端口
 */
dotenv.config({
    path: './config/config.env'
})
const port = process.env.PORT || 3000

// app.use('/v1/api', express.static('public'))
app.get('/', (req, res) => {
    // res.send('Hello World!')
    // res.json({ msg: 'Hello World!' })
    // res.status(400)
    // res.status(400).json({ success: false, msg: 'Hello World!' })
    res.status(200).json({ success: true, msg: 'Hello World!' })
})

// 获取所以数据
app.get('/api/v1/mscamps', (req, res) => {
    res.status(200).json({ success: true, msg: '获取到所以数据' })
})

//获取单个数据
app.get('/api/v1/mscamps/:id', (req, res) => {
    res.status(200).json({ success: true, msg: `获取到数据:${req.params.id}` })
})

// 添加数据

app.post('/api/v1/mscamps/', (req, res) => {
    res.status(200).json({ success: true, msg: `创建了新数据` })
})

// 更新数据
app.put('/api/v1/mscamps/:id', (req, res) => {
    res.status(200).json({ success: true, msg: `更新了数据:${req.params.id}` })
})

// 删除数据
app.delete('/api/v1/mscamps/:id', (req, res) => {
    res.status(200).json({ success: true, msg: `删除了数据:${req.params.id}` })
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
/**
 *  挂载路由地址
 */

/**
 * 监听服务
 */
const server = app.listen(port, () => {
    console.log(`服务运行在 http://${getIPAdress()}:${port}`)
})

// 设置服务永不超时
server.setTimeout(0)
