const { Router } = require('express')
const postRouter = Router()
const postController = require('../controllers/postController')

postRouter.get('/', postController.getAll)
postRouter.get('/:postId', postController.get)
postRouter.post('/', postController.create)
postRouter.put('/:postId', postController.update)
postRouter.delete('/:postId', postController.deletee)

module.exports = postRouter