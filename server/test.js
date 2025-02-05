const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()




async function main(){
    const user = await prisma.post.create({
        data: {
            title: 'Second post',
            content: 'I love cuddlebear',
            authorId: 1
        }
    })

    console.log(user)
}

main()