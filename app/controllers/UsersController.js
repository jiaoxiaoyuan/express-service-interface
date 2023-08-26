const useModel = require('../models/use.model')

module.exports = {
    /**
     *  @description 查询所有用户信息
     */
    getUserList(req, res) {
        try {
            useModel
                .AllUser()
                .then(data => {
                    res.status(200).json({
                        success: true,
                        code: 200,
                        msg: '请求成功！',
                        data: data
                    })
                })
                .catch(err => {
                    res.status(500).json({
                        msg: e.message
                    })
                })
        } catch (e) {
            res.status(500).json({
                msg: e.message
            })
        }
    },

    /**
     *  @description 创建注册用户
     */

    /**
     *  @description 登陆用户
     */
    async login(req, res) {
        try {
            await useModel
                .login(req.body)
                .then(async data => {
                    res.status(200).json(await data)
                })
                .catch(err => {
                    res.status(500).json({
                        msg: err.message
                    })
                })
        } catch (e) {
            res.status(500).json({
                msg: e.message
            })
        }
    }
}
