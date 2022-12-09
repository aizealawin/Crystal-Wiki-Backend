const Router = require('express').Router()
const controller = require('../controllers/UserController')
// const middleware = require('../middleware')

Router.get('/', controller.GetUsers)
Router.get('/:user_Id', controller.GetUserById)
Router.post('/create', controller.CreateUser)
Router.put('/:user_Id', controller.UpdateUser)
Router.delete('/:user_Id', controller.DeleteUser)

module.exports = Router
