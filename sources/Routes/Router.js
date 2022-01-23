const { Router } = require('express')

const UserController = require('../Controllers/UserController')
const SessionController = require('../Controllers/SessionController')
const ProductController = require('../Controllers/ProductController')

const routes = Router()

routes.post('/user', UserController.create)
routes.get('/user', UserController.index)
routes.delete('/user/:user_id', UserController.delete)
routes.post('/:user_id/product', ProductController.create)
routes.post('/session', SessionController.create)

module.exports = routes