const { getAllCommentsFromPost, createComment, updateComment, deleteComment } = require('../services/commentServices')

const getAll = async(req, res, next) => {
    const comments = await getAllCommentsFromPost({
        postId: req.params.postId
    })
    console.log('hello')
    res.json(comments)
}


const create = async(req, res, next) => {
    const comment = await createComment({
        content: req.body.content,
        authorId: req.user.id,
        postId: req.body.postId
    })

    res.json(comment)
}

const update = async(req, res, next) => {
    const comment = await updateComment({
        id: req.params.commentId,
        content: req.body.content,
 
    })

    console.log(comment)
    res.json(comment)
}

const deletee = async(req, res, next) => {
    const comment = await deleteComment(req.params.commentId)

    console.log(comment)
    res.json(comment)
}

module.exports = {
    getAll,
    create,
    update,
    deletee
}