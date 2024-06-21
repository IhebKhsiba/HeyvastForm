"use client"

import * as z from 'zod'
import { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { CardWrapper } from "./card-wrapper"
import { zodResolver } from '@hookform/resolvers/zod'
import { CondidatSchema } from '@/schemas'
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
import { create } from '@/actions/register'

export const CondidatForm = () => {
    const [error, setError] = useState<string | undefined>('')
    const [success, setSuccess] = useState<string | undefined>('')
    const [isPending, startTransition] = useTransition()
    const form = useForm<z.infer<typeof CondidatSchema>>({
        resolver: zodResolver(CondidatSchema),
        defaultValues: {
            email:"",
            name:"",
            age:"",
        },
    })

    const onSubmit = (values: z.infer<typeof CondidatSchema>) => {
        setError("")
        setSuccess("")

        startTransition(() => {
            create(values)
            .then((data) => {
                setError(data.error)
                setSuccess(data.success)
                console.log(data);
            })
        })
        
    }
    return (
        <CardWrapper
        headerLabel="Identifiants condidat"
        backButtonHref="/auth/login"
        BackButtonLabel='Retour'
        
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
                           name="name"
                           render={({field}) => (
                            <FormItem>
                                <FormLabel>Nom</FormLabel>
                                <FormControl>
                                    <Input 
                                    {...field}
                                    disabled={isPending}
                                    placeholder='Votre nom'
                                    type='text'
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                           )}
                           />
                           <FormField 
                           control={form.control}
                           name="age"
                           render={({field}) => (
                            <FormItem>
                                <FormLabel>Age</FormLabel>
                                <FormControl>
                                    <Input 
                                    {...field}
                                    disabled={isPending}
                                    placeholder=''
                                    
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
                            Commencer le test
                        </Button>

                </form>

            </Form>
            
        </CardWrapper>
    )
}