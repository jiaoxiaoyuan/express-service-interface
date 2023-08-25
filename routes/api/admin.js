const express = require('express')
const router = express.Router()

/**
 * 公共接口路由
 */
const UsersApi = require('../../app/controllers/UsersController')

// 用户列表
router.get('/api/sys/use', UsersApi.getUserList)

module.exports = router