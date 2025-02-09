const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const getAllCommentsFromPost = async(postId) => {
    try{
        const comments = await prisma.comment.findMany({
            where: {
                postId: +postId
            }
        })
        return comments

    } catch(err) {
        console.log(err)
    }
}

const createComment = async({content, postId}) => {
    try{
        const comment = await prisma.comment.create({
            data: {
                content: content,
                authorId: +req.user.id,
                postId: +postId
            }
        })
        console.log(comment)
    } catch(err) {
        console.log(err)
    }
}

const updateComment = async(id, content) => {
    try{
        const comment = await prisma.comment.update({
            data: {
                content: content
            },
            where: {
                id: +id
            }
        })
        console.log(comment)
    } catch(err) {
        console.log(err)
    }
}

const deleteComment = async() => {
    try{
        const comment = await prisma.comment.delete({
            where: {
                id: +id
            }
        })
        console.log(comment)
    } catch(err) {
        console.log(err)
    }
}

module.exports = {
    getAllCommentsFromPost,
    createComment,
    updateComment,
    deleteComment
}