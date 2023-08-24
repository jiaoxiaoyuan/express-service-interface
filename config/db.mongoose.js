const mongoose = require('mongoose')
const connectDB = async () => {
    const conn = await mongoose.connect(process.env.NET_MONGO_URI, {
        useNewUrlParser: true
    })
    console.log(`MongoDB Connected: ${conn.connection.host}`.blue.bold)
}

module.exports = connectDB
