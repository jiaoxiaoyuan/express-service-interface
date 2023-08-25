const express = require('express')
const router = express.Router()

/**
 * @description 测试接口
 */
router.use(require('./test'))

/**
 * @description 公共接口
 */

router.use(require('./api/public'))

/**
 *  @description 查询用户
 */
router.use(require('./api/admin'))

module.exports = router
