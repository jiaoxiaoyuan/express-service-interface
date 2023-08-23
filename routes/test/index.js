const express = require('express')
const router = express.Router()

/**
 * 测试接口路由
 */
const TsesApi = require('../../app/controllers/TestController')
router.get('/api/mscamps', TsesApi.getAll)
router.get('/api/mscamps/:id', TsesApi.getOne)
router.post('/api/mscamps/:id', TsesApi.post)
router.put('/api/mscamps/:id', TsesApi.put)
router.delete('/api/mscamps/:id', TsesApi.delete)

module.exports = router
