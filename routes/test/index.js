/**
 * 测试接口路由
 */

// 引入控制器
// const TestController = require('../controllers/TestController')
// const TestApi = new TestController()

let Test = {
    getAll: (req, res) => {
        res.status(200).json({ success: true, msg: '获取到所以数据' })
    },
    getOne: (req, res) => {
        res.status(200).json({ success: true, msg: `获取到数据:${req.params.id}` })
    },
    post: (req, res) => {
        res.status(200).json({ success: true, msg: `创建了新数据` })
    },
    put: (req, res) => {
        res.status(200).json({ success: true, msg: `更新了新数据` })
    },
    delete: (req, res) => {
        res.status(200).json({ success: true, msg: `删除了新数据` })
    }
}
module.exports = Test
