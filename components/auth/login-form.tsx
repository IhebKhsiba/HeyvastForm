"use client"

import * as z from 'zod'
import { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { CardWrapper } from "./card-wrapper"
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginSchema } from '@/schemas'
import {Input} from "@/components/ui/input"
import { Button } from '../ui/button'

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
}from "@/components/ui/form"
import { FormError } from '../form-error'
import { FormSuccess } from '../form-success'
import { login } from '@/actions/login'

export const LoginForm = () => {
    const [error, setError] = useState<string | undefined>('')
    const [success, setSuccess] = useState<string | undefined>('')
    const [isPending, startTransition] = useTransition()
    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email:"",
            password:"",
        },
    })

    const onSubmit = (values: z.infer<typeof LoginSchema>) => {
        setError("")
        setSuccess("")

        startTransition(() => {
            login(values)
            .then((data) => {
                setError(data?.error)
                
            })
        })
        
    }
    return (
        <CardWrapper
        headerLabel="Veuillez vous identifier"
        backButtonHref="/auth/condidat"
        BackButtonLabel='Êtes-vous un candidat ?'
        
        >
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}
                    className='space-y-6'
                    >
                        <div className='space-y-4'>
                           <FormField 
                           control={form.control}
                           name="email"
                           render={({field}) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input 
                                    {...field}
                                    disabled={isPending}
                                    placeholder='ihebkhsiba@exemple.com'
                                    type='email'
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                           )}
                           />
                           <FormField 
                           control={form.control}
                           name="password"
                           render={({field}) => (
                            <FormItem>
                                <FormLabel>Mot de passe</FormLabel>
                                <FormControl>
                                    <Input 
                                    {...field}
                                    disabled={isPending}
                                    placeholder='******'
                                    type='password'
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                           )}
                           />
                        </div>

                        <FormError message={error}/>
                        <FormSuccess message={success}/>
                        <Button
                        disabled={isPending}
                            type="submit"
                            className='w-full'
                        >
                            Connexion
                        </Button>

                </form>

            </Form>
            
        </CardWrapper>
    )
}