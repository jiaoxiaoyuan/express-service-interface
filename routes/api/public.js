const express = require('express')
const router = express.Router()

/**
 * 公共接口路由
 */
const PublicApi = require('../../app/controllers/publicController')

router.get('/api/public/getWeather', PublicApi.getWeather)

module.exports = router
