const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const getAllPosts = async() => {
    try{
        const posts = await prisma.post.findMany({})

        console.log(posts)
        return posts
    } catch(err) {
        console.log(err)
    }
}

const getPost = async(id) => {
    try{
        const post = await prisma.post.findUnique({
            where: {
                id: id
            }
        })

        console.log(post)
        return post
    } catch(err) {
        console.log(err)
    }
}

const createPost = async({title, authorId}) => {
    try{
        const post = await prisma.post.create({
            data: {
                title: title,
                authorId: authorId
            }
        })

        console.log(post)
        return post
    } catch(err) {
        console.log(err)
    }
}

const updatePost = async({postId, title, content, status}) => {
    try{
        const post = await prisma.post.update({
            where: {
                id: postId
            },
            data: {
                title: title,
                content: content,
                status: status
            }
        })

        console.log(post)
    } catch(err) {
        console.log(err)
    }
}

const deletePost = async({postId}) => {
    try{
        const post = await prisma.post.delete({
            where: {
                id: postId
            }
        })

        console.log(post)
    } catch(err) {
        console.log(err)
    }
}

module.exports = {
    getAllPosts,
    getPost,
    createPost,
    updatePost,
    deletePost
}