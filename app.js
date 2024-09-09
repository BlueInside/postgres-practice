const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    console.log('usernames will be logged here - wip')
})

app.get('/new', (req, res) => {
    console.log('usernames will be logged here - wip')
})

app.post('/new', (req, res) => {
    console.log('username to be saved: ', req.body.username)
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})