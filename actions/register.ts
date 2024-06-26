"use server"
import { db } from '@/lib/db'
import * as z from 'zod'
import { FormSchema } from "@/components/formulaire/steps/Step1" 




export const create = async (values: z.infer<typeof FormSchema >) =>{
    const validatedFields = FormSchema.safeParse(values)

    if (!validatedFields.success){
        return { error: "Champs invalides!"}
    }

    const {firstName, lastName, email, phoneNumber, educationLevel, age } = validatedFields.data;
    
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
            age,
            

        }
    })

    console.log(user);
    return { success: "Tout est parfait!", id: user.id}

}