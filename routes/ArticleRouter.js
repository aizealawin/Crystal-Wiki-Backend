const Router = require('express').Router()
const controller = require('../controllers/ArticleController')
// const middleware = require('../middleware')

Router.get('/', controller.GetArticles)
Router.get('/:articleId', controller.GetArticleById)
Router.post('/create', controller.CreateArticle)
Router.put('/:articleId', controller.UpdateArticle)
Router.delete('/:articleId', controller.DeleteArticle)

module.exports = Router
