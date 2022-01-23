const { Router } = require('express')

const UserController = require('../Controllers/UserController')

const routes = Router()

routes.post('/user', UserController.create)
routes.delete('/user/:user_id', UserController.delete)

module.exports = routes