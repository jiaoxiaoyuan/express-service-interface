const ErrorCatch = (err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        console.log('无效token', err)
        return res.msg(err.status, '无效token', {}) // 401状态码(unauthorized未授权)
    }
    if (err.status == 400) {
        console.log(err)
        return res.msg(err.status, '请检查请求参数', { err })
    }
    if (err.status == 500) {
        console.log(err)
        return res.msg(err.status, '服务器内部错误', { err })
    }
    console.log(err)
    return res.msg(err.status, '未知错误', { err })

    if (err.status == 404) {
        return res.msg(err.status, '资源不存在', { err })
    }
}

module.exports = ErrorCatch
