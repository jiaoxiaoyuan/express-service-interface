module.exports = {
    HOST: 'localhost',
    USER: 'root', //mysql的用户名
    PASSWORD: '123456', // mysql的密码
    DB: 'mg_db',
    dialect: 'mysql',
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}
