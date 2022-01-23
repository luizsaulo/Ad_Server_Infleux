const { Router } = require('express')

const routes = Router()

routes.get('/', function (req, res) {
    res.send('Hello from Router')
})

module.exports = routes