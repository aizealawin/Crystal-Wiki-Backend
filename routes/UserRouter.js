const Router = require('express').Router()
const controller = require('../controllers/UserController')
// const middleware = require('../middleware')

Router.get('/', controller.GetUsers)
Router.get('/:userId', controller.GetUserById)
Router.post('/create', controller.CreateUser)
Router.put('/:userId', controller.UpdateUser)
Router.delete('/:userId', controller.DeleteUser)

module.exports = Router
