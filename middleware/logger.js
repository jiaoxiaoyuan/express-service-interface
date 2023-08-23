/**
 * 中间件
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */

const logger = (req, res, next) => {
    console.log(`${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`)

    // res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Origin', req.headers.origin)
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild')
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')
    res.header('Access-Control-Allow-Credentials', 'true')
    res.header('Content-Type', 'application/json;charset=utf-8')

    if (req.method == 'OPTIONS') {
        res.send(200) //让options请求快速返回//
    } else {
        next()
    }

    // 资源404
    res.status(200).json({
        code: 404,
        msg: '资源不存在'
    })
}

module.exports = logger
