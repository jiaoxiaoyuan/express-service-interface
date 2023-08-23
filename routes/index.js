const express = require('express')
const router = express.Router()

const TsesApi = require('./test')

/**
 * @description 测试接口
 */
router.get('/api/mscamps', TsesApi.getAll)
router.get('/api/mscamps/:id', TsesApi.getOne)
router.post('/api/mscamps/:id', TsesApi.post)
router.put('/api/mscamps/:id', TsesApi.put)
router.delete('/api/mscamps/:id', TsesApi.delete)

/**
 *  @description
 */

module.exports = router
