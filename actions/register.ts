"use server"
import { db } from '@/lib/db'
import * as z from 'zod'
import { CondidatSchema } from '@/schemas'




export const create = async (values: z.infer<typeof CondidatSchema >) =>{
    const validatedFields = CondidatSchema.safeParse(values)

    if (!validatedFields.success){
        return { error: "Champs invalides!"}
    }

    const {email, name, age, } = validatedFields.data;
    
    const existingUser = await db.user.findUnique({
        where :{
            email,
        }
    });

    if (existingUser) {
        return {error: "Email deja utilisé"}
    }

    let user = await db.user.create({
        data:{
            email,
            name,
            age,
            

        }
    })

    console.log(user);
    return { success: "Tout est parfait!", id: user.id}

}