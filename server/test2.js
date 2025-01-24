const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()




async function main(){
    const user = await prisma.user.create({
        data: {
            username: "chipshajen",
            email: "hi@me.com",
            editor: true
        }
    })

    console.log(user)
}

main()