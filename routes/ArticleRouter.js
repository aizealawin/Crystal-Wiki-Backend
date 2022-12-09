const Router = require('express').Router()
const controller = require('../controllers/ArticleController')
// const middleware = require('../middleware')

Router.get('/', controller.GetArticles)
Router.get('/:article_Id', controller.GetArticleById)
Router.post('/create', controller.CreateArticle)
Router.put('/:article_Id', controller.UpdateArticle)
Router.delete('/:article_Id', controller.DeleteArticle)

module.exports = Router
