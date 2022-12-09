const { Comment } = require('../models')

const GetComments = async (req, res) => {
  try {
    const comments = await Comment.findAll()
    res.send(comments)
  } catch (error) {
    throw error
  }
}

const GetCommentById = async (req, res) => {
  try {
    const comment = await Comment.findByPk(req.params.commentId)
    res.send(comment)
  } catch (error) {
    throw error
  }
}

const CreateComment = async (req, res) => {
  try {
    const comment = await Comment.create({ ...req.body })
    res.send(comment)
  } catch (error) {
    throw error
  }
}

const UpdateComment = async (req, res) => {
  try {
    const comment = await Comment.update(
      { ...req.body },
      { where: { id: req.params.commentId }, returning: true }
    )
    res.send(comment)
  } catch (error) {
    throw error
  }
}

const DeleteComment = async (req, res) => {
  try {
    let commentId = parseInt(req.params.commentId)
    await Comment.destroy({ where: { id: commentId } })
    res.send({
      msg: `Comment with ID of ${commentId} Deleted`
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetComments,
  GetCommentById,
  CreateComment,
  UpdateComment,
  DeleteComment
}
