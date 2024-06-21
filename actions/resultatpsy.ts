"use server"
import { db } from '@/lib/db'
import * as z from 'zod'
import { ResultatPsySchema } from '@/schemas'



export const create = async (values: z.infer<typeof ResultatPsySchema >) =>{
    const validatedFields = ResultatPsySchema.safeParse(values)

    if (!validatedFields.success){
        return { error: "Champs invalides!"}
    }
    

    const {resultat_iq, resultat_matrice, psy_final} = validatedFields.data;
    let userId = "clxebvql70000wn5tgfdhhgpc";

    await db.resultatPsy.create({
        data:{
            resultat_iq,
            resultat_matrice,
            psy_final,
            userId,

        }
    })


    return { success: "Tout est parfait!"}

}
