const express = require('express')

const app = express()

app.get('/', (req,res) => {
    res.end('Hello World')
})

app.listen(8080,() => {
    console.log('Server has running')
})