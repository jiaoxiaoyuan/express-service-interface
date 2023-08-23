const express = require('express')
const dotenv = require('dotenv')

dotenv.config({
    path: './config/config.env'
})

const app = express()
const port = process.env.PORT || 3000

app.use('/v1/api', express.static('public'))
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
