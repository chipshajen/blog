const { getAllPosts, getPost, createPost, updatePost, deletePost } = require('../services/postServices')

const getAll = async(req, res, next) => {
    const posts = await getAllPosts()
    console.log('hello')
    console.log(posts)
    res.json(posts)
}

const get = async(req, res, next) => {
    const post = await getPost(req.params.postId)

    console.log(post)
    res.json(post)
}

const create = async(req, res, next) => {
    const post = await createPost({
        title: req.body.title,
        authorId: req.user.id
    })

    res.json(post)
}

const update = async(req, res, next) => {
    const post = await updatePost({
        postId: req.params.postId,
        title: req.body.title,
        content: req.body.content,
        status: req.body.status
    })

    console.log(post)
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
    deletee
}