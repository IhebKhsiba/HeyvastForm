
import NextAuth from "next-auth"
import authConfig from "@/auth.config"
import {PrismaAdapter} from "@auth/prisma-adapter"
import {UserRole} from "@prisma/client"

import { db } from "./lib/db"
import { getUserById } from "./data/user"
import { getAccountByUserId } from "./app/(protected)/data/acount"

export const {
    handlers: {GET, POST},
    auth,
    signIn,
    signOut,
} = NextAuth({
    callbacks: {
        async session ({ token , session}){
            if (token.sub && session.user){
                session.user.id = token.sub
            }
            if (token.role && session.user) {
                session.user.role = token.role as UserRole
            }
            if (session.user){
                session.user.name = token.name
                session.user.email = token.email as string
                session.user.isOAuth = token.isOAuth as boolean
            }
            
            return session
        },
        async jwt({ token }) {
           if (!token.sub) return token

           const existingUser =  await getUserById(token.sub)
           
           if (!existingUser) return token;

           const existingAccount = await getAccountByUserId(
            existingUser.id
           )

           token.isOAuth = !!existingAccount

           token.name = existingUser.name
           token.email = existingUser.email
           token.role =  existingUser.role
           
           

           return token

        }
    },
    adapter: PrismaAdapter(db),
    session: { strategy: "jwt"},
    ...authConfig
})