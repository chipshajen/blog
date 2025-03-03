const { getAllPosts, getPost, createPost, updatePost, updatePostStatus, deletePost } = require('../services/postServices')

const getAll = async(req, res, next) => {
    const posts = await getAllPosts()
    res.json(posts)
}

const get = async(req, res, next) => {
    const post = await getPost(req.params.postId)

    res.json(post)
}

const create = async(req, res, next) => {
    console.log(req.body)

    const post = await createPost({
        title: req.body.title,
        content: req.body.content,
        authorId: req.user?.id ?? 1
    })

    res.json(post)
}

const update = async(req, res, next) => {

    console.log(req.body)

    const post = await updatePost({
        postId: req.params.postId,
        title: req.body.title,
        content: req.body.content,
        status: req.body.status
    })
    res.json(post)
}

const updateStatus = async(req, res, next) => {

    console.log(req.body)

    const post = await updatePostStatus({
        postId: req.params.postId,
        status: req.body.status
    })
    res.json(post)
}

const deletee = async(req, res, next) => {
    const post = await deletePost(req.params.postId)

    console.log(post)
    res.json(post)
}

module.exports = {
    getAll,
    get,
    create,
    update,
    updateStatus,
    deletee
}