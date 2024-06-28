"use client"

import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTransition, useState } from "react"
import { useSession } from "next-auth/react"
import {
    Card,
    CardHeader,
    CardContent
}from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { settings } from "@/actions/settings"
import { SettingsSchema } from '@/schemas'
import {
    Form,
    FormField,
    FormControl,
    FormItem,
    FormLabel,
    FormMessage,
    FormDescription
}from "@/components/ui/form"
import { Input } from '@/components/ui/input'
import { useCurrentUser } from '@/hooks/use-current-user'
import { FormError } from "@/components/form-error"
import { FormSuccess } from '@/components/form-success'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { UserRole } from '@prisma/client'
import { Switch } from '@/components/ui/switch'

const SettingsPage =  () => {
    const user = useCurrentUser()


    const [error, setError] = useState<string | undefined>()
    const [success, setSuccess] = useState<string | undefined>()
    const { update } = useSession()
    const [isPending, startTransition] = useTransition()

    const form = useForm<z.infer<typeof SettingsSchema>>({
        resolver: zodResolver(SettingsSchema),
        defaultValues:{
            name: user?.name || undefined,
            email: user?.email || undefined,
            password: undefined,
            newPassword: undefined,
            role: user?.role ||undefined,
        }
    })


    const onSubmit = (values: z.infer<typeof SettingsSchema>) => {
        startTransition(() => {
            settings(values)
            .then((data) => {
                if (data.error) {
                    setError(data.error)
                }
                if (data.success) {
                    update()
                    setSuccess(data.success)
                }
            })
            .catch(() => setError("Erreur Inconnue!"))
    })
    }
  

    return (
        <Card className="bg-secondary flex justify-between items-center p-4 rounded-xl w-[600px] shadow-sm">
            <CardHeader>
                <p className="text-2xl font-semibold text-center">
                paramètres
                </p>
            </CardHeader>
            <CardContent>
               <Form {...form}>
                <form className='space-y-6' onSubmit={form.handleSubmit(onSubmit)}>
                <div className='space-y-4'>
                <FormField
                control={form.control}
                name="name"
                render={({ field }) =>(
                    <FormItem>
                        <FormLabel>Nom</FormLabel>
                            <FormControl>
                                <Input
                                   {...field}
                                   placeholder='Votre Nom.'
                                   disabled={isPending}
                                />
                            </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="email"
                render={({ field }) =>(
                    <FormItem>
                        <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input
                                   {...field}
                                   placeholder='Exemple@exemple.com'
                                   type='email'
                                   disabled={isPending}
                                />
                            </FormControl>
                            <FormMessage />
                    </FormItem>
                )}
                />
                 <FormField
                control={form.control}
                name="password"
                render={({ field }) =>(
                    <FormItem>
                        <FormLabel>Mot de passe</FormLabel>
                            <FormControl>
                                <Input
                                   {...field}
                                   placeholder='******'
                                   type='password'
                                   disabled={isPending}
                                />
                            </FormControl>
                            <FormMessage />
                    </FormItem>
                )}
                />
                 <FormField
                control={form.control}
                name="newPassword"
                render={({ field }) =>(
                    <FormItem>
                        <FormLabel>Nouveau mot de passe</FormLabel>
                            <FormControl>
                                <Input
                                   {...field}
                                   placeholder='******'
                                   type='password'
                                   disabled={isPending}
                                />
                            </FormControl>
                            <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="role"
                render={({ field }) =>(
                    <FormItem>
                       <FormLabel>
                        Role
                       </FormLabel>
                       <Select 
                       disabled={isPending}
                       onValueChange={field.onChange}
                       defaultValue={field.value}
                       >
                       <FormControl>
                        <SelectTrigger>
                            <SelectValue placeholder="Select a role" />
                        </SelectTrigger>
                       </FormControl>
                       <SelectContent>
                        <SelectItem value={UserRole.ADMIN}>
                            Admin
                        </SelectItem>
                        <SelectItem value={UserRole.USER}>
                            User
                        </SelectItem>
                       </SelectContent> 
                       </Select>
                       <FormMessage />
                    </FormItem>
                )}
                />



                 </div>
                 <FormError message={error} />
                 <FormSuccess message={success} />

                 <Button 
                 disabled={isPending}
                 type='submit'
                 >
                    Enregister</Button>
                </form>
               </Form>
            </CardContent>

        </Card>
    )
}

export default SettingsPage