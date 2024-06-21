import { db } from "@/lib/db";

export const getUserByEmail = async (email: string) => {
    try{
        const user = await db.user.findUnique({where: {email}})
        return user
    }catch {
        return null
    }
}

export const getUserById = async (id: string) => {
    try{
        const user = await db.user.findUnique({where: { id }})
        return user
    }catch {
        return null
    }
}

export const getUserByEmailWithPassword = async (email: string) => {
    try {
        const user = await db.user.findUnique({ where: { email }, select: { password: true } });
        return user;
    } catch {
        return null;
    }
};

export const getUserByIdWithPassword = async (id: string) => {
    try {
        const user = await db.user.findUnique({ where: { id }, select: { password: true } });
        return user;
    } catch {
        return null;
    }
};

