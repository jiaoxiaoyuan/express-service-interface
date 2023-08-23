class baseController {
    constructor(res) {
        this.res = res
        this.results = {
            code: 200,
            success: true,
            msg: '请求成功！',
            data: null
        }
    }

    json(status, data) {
        return this.res.status(200).json(status, this.result(data.data))
    }

    result(data) {
        this.results.data = data
        return this.results
    }
}

module.exports = baseController
