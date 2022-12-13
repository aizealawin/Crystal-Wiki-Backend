const Router = require('express').Router()
const controller = require('../controllers/CommentController')
// const middleware = require('../middleware')

Router.get('/', controller.GetComments)
Router.get('/:commentId', controller.GetCommentById)
Router.post('/create', controller.CreateComment)
Router.put('/:commentId', controller.UpdateComment)
Router.delete('/:commentId', controller.DeleteComment)

module.exports = Router
