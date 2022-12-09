const Router = require('express').Router()
const ArticleRouter = require('./ArticleRouter')
const UserRouter = require('./UserRouter')
const CommentRouter = require('./CommentRouter')
// const UserRouter = require('./UserRouter')
// const AuthRouter = require('./AuthRouter')

Router.use('/articles', ArticleRouter)
Router.use('/users', UserRouter)
Router.use('/comments', CommentRouter)
// Router.use('/auth', AuthRouter)

module.exports = Router
