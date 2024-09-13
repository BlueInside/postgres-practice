const express = require('express')
const app = express()
const port = 3000
const controller = require('./controllers/user');
const path = require('node:path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.urlencoded())

app.get('/', controller.getUsernames)

app.get('/new', controller.createUsernameGet)

app.post('/new', controller.createUsernamePost)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})