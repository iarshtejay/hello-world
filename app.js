const express = require('express')
const app = express()

app.get('/', (request, response) => {
    response.send('Hi')
})

app.get('/home', (request, response) => {
    response.send('You are on home')
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})