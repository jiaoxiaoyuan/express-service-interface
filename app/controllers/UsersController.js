const useModel = require('../models/use.model')

module.exports = {
    /**
     *  @description 查询所有用户信息
     */
    getUserList(req, res) {
        try {
            useModel.AllUser().then(data => {
                res.status(200).json({
                    success: true,
                    code: 200,
                    msg: '请求成功！',
                    data: data
                })
            })
        } catch (e) {
            res.status(400).json({
                msg: e.message
            })
        }
    }
}
