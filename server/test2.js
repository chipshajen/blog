const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()
const bcrypt = require('bcryptjs')




async function main(){
    const password = 'husbander'
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    
    const user = await prisma.user.update({
        data: {
            password: hashedPassword
        },
        where: {
            id: 1
        }
    })

    console.log(user)
}

main()