"use server"
import { db } from '@/lib/db'
import * as z from 'zod'
import { ResultatSchema } from '@/schemas'



export const create = async (values: z.infer<typeof ResultatSchema >) =>{
    const validatedFields = ResultatSchema.safeParse(values)

    if (!validatedFields.success){
        return { error: "Champs invalides!"}
    }
    

    const {expressionfrancaise, conjugaison, vocabulaire, orthographe, prononciation, final} = validatedFields.data;
    let userId = "clxebvql70000wn5tgfdhhgpc";

    await db.resultat.create({
        data:{
            expressionfrancaise,
            conjugaison,
            vocabulaire,
            orthographe,
            prononciation,
            final,
            user: {
                connect: { id: userId } 
            }

        }
    })


    return { success: "Tout est parfait!"}

}



