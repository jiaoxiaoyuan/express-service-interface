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
                pool.query(SqlMap.use.list, params, function (error, result, fields) {
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
    },
    /**
     *  登陆接口
     * @param username 用户名
     * @param passWord 密码
     * @returns
     */
    login({ userName, passWord }) {
        return new Promise((resolve, reject) => {
            try {
                pool.query(SqlMap.use.get, [userName], function (error, result, fields) {
                    if (error) {
                        resolve({
                            code: 400,
                            success: false,
                            msg: '请求失败!',
                            data: error
                        })
                    } else {
                        if (result.length == 0) {
                            resolve({
                                code: 200,
                                success: true,
                                msg: '账号不存在或者被禁用!',
                                data: null
                            })
                        } else {
                            resolve({
                                code: 200,
                                success: true,
                                msg: '请求成功',
                                data: result[0]
                            })
                        }
                    }
                })
            } catch (error) {
                reject(error)
            }
        })
    }
}
