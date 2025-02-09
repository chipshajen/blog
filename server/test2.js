const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()




async function main(){
    const user = await prisma.post.findMany({
        
    })

    console.log(user)
}

main()