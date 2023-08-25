const mysql = require('mysql')
const mysqlConf = require('../../config/db.mysql')

const SqlMap = require('../common/sqlMap')
const pool = mysql.createPool(mysqlConf.mysql)

module.exports = {
    /**
     *  查询当前所有用户
     * @param username 用户名
     * @returns
     */

    AllUser(params) {
        return new Promise((resolve, reject) => {
            try {
                pool.query(SqlMap.admin.list, params, function (error, result, fields) {
                    if (error) {
                        resolve({
                            success: false,
                            msg: '请求失败!',
                            data: error
                        })
                    } else {
                        resolve({
                            success: true,
                            msg: '请求成功',
                            data: result
                        })
                    }
                })
            } catch (error) {
                reject(error)
            }
        })
    }
}
