const BaseController = require('../common/baseController')
class TestController extends BaseController {
    constructor() {
        super()
    }

    /**
     *  @description 测试接口
     *  @type 公共接口
     *
     */

    getAll(req, res) {
        try {
            res.status(200).json(this.result('获取到所以数据'))
        } catch (e) {
            res.status(400).json({
                msg: e.message
            })
        }
    }
}
