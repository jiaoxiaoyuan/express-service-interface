const express = require('express')
const router = express.Router()

/**
 * 用户接口路由
 */
const UsersApi = require('../../app/controllers/UsersController')

// 用户列表
router.get('/api/sys/use', UsersApi.getUserList)
// 登陆
router.post('/api/use/login', UsersApi.login)

module.exports = router
