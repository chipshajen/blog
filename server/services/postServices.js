const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const getAllPosts = async() => {
    try{
        const posts = await prisma.post.findMany({})
        return posts
    } catch(err) {
        console.log(err)
    }
}

const getPost = async(id) => {
    try{
        const post = await prisma.post.findUnique({
            where: {
                id: +id
            }
        })
        return post
    } catch(err) {
        console.log(err)
    }
}

const createPost = async({title, content, authorId}) => {
    try{
        console.log(title)

        const post = await prisma.post.create({
            data: {
                title: title,
                content: content,
                status: "Draft",
                authorId: +authorId
            }
        })
        return post
    } catch(err) {
        // console.log(err)
    }
}

const updatePost = async({postId, title, content, status}) => {
    try{
        const post = await prisma.post.update({
            where: {
                id: +postId
            },
            data: {
                title: title,
                content: content,
                status: status
            }
        })
        return post
    } catch(err) {
        console.log(err)
    }
}

const updatePostStatus = async({postId, status}) => {
    try{
        const post = await prisma.post.update({
            where: {
                id: +postId
            },
            data: {
                status: status
            }
        })
        return post
    } catch(err) {
        console.log(err)
    }
}

const deletePost = async({postId}) => {
    try{
        const post = await prisma.post.delete({
            where: {
                id: +postId
            }
        })
    } catch(err) {
        console.log(err)
    }
}

module.exports = {
    getAllPosts,
    getPost,
    createPost,
    updatePost,
    updatePostStatus,
    deletePost
}