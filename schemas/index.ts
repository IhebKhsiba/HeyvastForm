

import { UserRole } from '@prisma/client';
import * as z from 'zod'




const UserSchema = z.object({
    id: z.string(), // ou tout autre type approprié pour l'ID de l'utilisateur
    // Ajoutez d'autres propriétés de l'utilisateur si nécessaire
});
export const LoginSchema = z.object({
    email: z.string().email({
        message:"Email invalide"
    }),
    password: z.string().min(1,{
        message:"Mot de passe obligatoire!"
    })
});
export const CondidatSchema = z.object({
    email: z.string().email({
        message:"Email invalide"
    }),
    name: z.string().min(1,{
        message:"Nom obligatoir!"
    }),
    age: z.string().min(1,{
        message:"Age obligatoire"
    })
    
})



export const ResultatSchema = z.object({
    expressionfrancaise: z.number(),
    conjugaison: z.number(),
    vocabulaire: z.number(),
    orthographe: z.number(),
    prononciation: z.number(),
    final: z.number(),
    user:UserSchema,
    
})

export const SettingsSchema = z.object({
    name: z.optional(z.string()),
    role: z.enum([UserRole.ADMIN, UserRole.USER]),
    email: z.optional(z.string().email()),
    password: z.optional(z.string().min(6)),
    newPassword: z.optional(z.string().min(6)),
})
.refine ((data) => {
    if (data.password && !data.newPassword){
        return false
    }
   
    return true
}, {
    message: "New password is required!",
    path: ["newPassword"]
})
.refine ((data) => {
    if (data.newPassword && !data.password){
        return false
    }
   
    return true
}, {
    message: "Password is required!",
    path: ["password"]
})


export const ResultatPsySchema = z.object({
    resultat_iq: z.number(),
    resultat_matrice: z.number(),
    
    psy_final: z.number(),

    user:UserSchema,
    
})

    