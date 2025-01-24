const { Router } = require('express')
const commentRouter = Router()
const commentController = require('../controllers/commentController')

commentRouter.get('/:postId', commentController.getAll)
commentRouter.comment('/', commentController.create)
commentRouter.put('/:commentId', commentController.update)
commentRouter.delete('/:commentId', commentController.deletee)

module.exports = commentRouter