const express = require('express')
const app = express()
const port = 3000

//get method 요청에 대한 라우팅
app.get('/', (req, res) => {
    res.send('Hello Woeld!')
})

app.get('/cute', (req, res)=> {
    res.send('cute rabbit')
})

app.listen(port)