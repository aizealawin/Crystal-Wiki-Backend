const { Article } = require('../models')

const GetArticles = async (req, res) => {
  try {
    const articles = await Article.findAll()
    res.send(articles)
  } catch (error) {
    throw error
  }
}

const GetArticleById = async (req, res) => {
  try {
    const article = await Article.findByPk(req.params.articleId)
    res.send(article)
  } catch (error) {
    throw error
  }
}

const CreateArticle = async (req, res) => {
  try {
    const article = await Article.create({ ...req.body })
    res.send(article)
  } catch (error) {
    throw error
  }
}

const UpdateArticle = async (req, res) => {
  try {
    const article = await Article.update(
      { ...req.body },
      { where: { id: req.params.articleId }, returning: true }
    )
    res.send(article)
  } catch (error) {
    throw error
  }
}

const DeleteArticle = async (req, res) => {
  try {
    let articleId = parseInt(req.params.articleId)
    await Article.destroy({ where: { id: articleId } })
    res.send({
      msg: `Article with ID of ${articleId} Deleted`
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetArticles,
  GetArticleById,
  CreateArticle,
  UpdateArticle,
  DeleteArticle
}
