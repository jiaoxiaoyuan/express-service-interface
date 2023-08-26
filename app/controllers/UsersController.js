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
    login(req, res) {
        try {
            // 验证用户名密码是否正确
            let { username, passWord } = req.body
            if (!username && !passWord) {
                useModel
                    .login(req.body)
                    .then(data => {
                        if (data && data.length > 0) {
                            res.status(200).json({
                                success: true,
                                code: 200,
                                msg: '请求成功！',
                                data: data
                            })
                        } else {
                            res.status(200).json({
                                code: 200,
                                success: false,
                                msg: '没有该用户！'
                            })
                        }
                    })
                    .catch(err => {
                        res.status(500).json({
                            msg: e.message
                        })
                    })
            } else {
                res.status(200).json({
                    code: 200,
                    success: false,
                    msg: '登陆帐号或密码不能为空！'
                })
            }
        } catch (e) {
            res.status(500).json({
                msg: e.message
            })
        }
    }
}
