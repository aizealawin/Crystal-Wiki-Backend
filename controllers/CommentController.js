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
    const comment = await Comment.findByPk(req.params.Comment_Id)
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
      { where: { id: req.params.Comment_Id }, returning: true }
    )
    res.send(comment)
  } catch (error) {
    throw error
  }
}

const DeleteComment = async (req, res) => {
  try {
    let commentId = parseInt(req.params.Comment_Id)
    await Comment.destroy({ where: { id: CommentId } })
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
