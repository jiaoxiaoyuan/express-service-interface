const sqlMap = {
    use: {
        list: 'SELECT * FROM sys_user',
        get: 'SELECT * FROM sys_user WHERE id = ?',
        del: 'DELETE FROM sys_user WHERE id = ?',
        add: 'INSERT INTO sys_user (username, password, create_time) VALUES (?, ?, ?)'
    }
}
module.exports = sqlMap
