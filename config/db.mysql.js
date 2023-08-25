module.exports = {
    mysql: {
        host: '129.28.153.89',
        post: '3306',
        user: 'NativeBase',
        password: 'iAb4bDwZ7ENyJcyZ',
        database: 'nativebase',

        serverId: 256,
        minInterval: 200,
        acquireTimeout: 60 * 60 * 1000,
        connectionLimit: 100, // 最大连接数，默认为10
        connectTimeout: 60 * 60 * 1000,
        queueLimit: 0,
        debug: true,
        waitForConnection: true,
        dateStrings: true,
        timeout: 60 * 60 * 1000
    }
}
