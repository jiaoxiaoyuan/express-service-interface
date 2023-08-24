const express = require('express')
const router = express.Router()

/**
 * 公共接口路由
 */
const PublicApi = require('../../app/controllers/publicController')

// 获取天气
router.get('/api/public/getWeather', PublicApi.getWeather)

// 获取客户端基本信息
router.get('/api/public/getOs', PublicApi.getOs)

// 获取上网信息
router.get('/api/public/getNet', PublicApi.getNet)

// 获取节假日/万年历
router.get('/api/public/getHoliday', PublicApi.getHoliday)

module.exports = router
