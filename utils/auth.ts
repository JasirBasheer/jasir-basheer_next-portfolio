import GoogleProvider from "next-auth/providers/google"
import { Prisma } from "@prisma/client"
import { PrismaAdapter } from '@auth/prisma-adapter'

export const authOptions = {
    adapter: PrismaAdapter(Prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID!, 
            clientSecret: process.env.GOOGLE_SECRET!,  
        })
    ]
}