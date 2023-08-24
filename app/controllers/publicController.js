/**
 * public 控制器
 */

const Qs = require('qs')
const request = require('request')
const { WeatherUrl, WeatherKey, publicUrl, appId, appSecret } = require('../../config/common')
module.exports = {
    /**
     * @description 获取天气
     * @access 公开
     */
    getWeather(req, res) {
        try {
            let data = {
                key: WeatherKey,
                city: '重庆市'
            }
            let url = `${WeatherUrl}?${Qs.stringify(data)}`
            request(url, (err, response, body) => {
                if (!err && response.statusCode == 200) {
                    let resq = JSON.parse(body)
                    res.status(200).json({ success: true, code: 200, msg: '获取到所以数据', data: resq.lives })
                }
            })
        } catch (e) {
            res.status(400).json({
                msg: e.message
            })
        }
    }
}
