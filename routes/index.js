const express = require('express')
const router = express.Router()

/**
 * @description 测试接口
 */
router.use(require('./test'))

module.exports = router
