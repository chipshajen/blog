const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()




async function main(){
    const user = await prisma.post.create({
        data: {
            title: 'First post',
            content: 'I like baber',
            authorId: 1
        }
    })

    console.log(user)
}

main()