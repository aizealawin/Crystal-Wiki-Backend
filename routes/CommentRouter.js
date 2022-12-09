const Router = require('express').Router()
const controller = require('../controllers/CommentController')
// const middleware = require('../middleware')

Router.get('/', controller.GetComments)
Router.get('/:comment_Id', controller.GetCommentById)
Router.post('/create', controller.CreateComment)
Router.put('/:comment_Id', controller.UpdateComment)
Router.delete('/:comment_Id', controller.DeleteComment)

module.exports = Router
