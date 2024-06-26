"use client";
import ReCAPTCHA from "react-google-recaptcha"
import Head from "next/head";
import React from "react"
import { useState, useTransition, useRef } from 'react'
import { useCallback } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { number, z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { CardWrapper } from "@/components/auth/card-wrapper";
import { FormError } from '@/components/form-error';
import { FormSuccess } from '@/components/form-success';

export const FormSchema = z.object({
  firstName: z.string().min(2, "Nom obligatoire."),
  lastName: z.string().min(2, "Votre prenom doit contenir au moins 2 caractères."),
  email: z.string().email("Email déjà utilisé ou invalide."),
  phoneNumber: z.string().min(8, "Votre numéro de téléphone doit contenir au moins 8 chiffres."),
  educationLevel: z.string().min(2, "Le niveau d'éducation est requis."),
  age: z.string().min(1, "l'age est requis."), // Changed to string
});
export type FormSchemaType = z.infer<typeof FormSchema>;

interface Step1Props {
  onNext: (userData: FormSchemaType) => void; // Function to move to the next step and pass user data
}

const Step1: React.FC<Step1Props> = ({ onNext }) => {
  const [error, setError] = useState<string | undefined>('')
    const [success, setSuccess] = useState<string | undefined>('')
    const [isPending, startTransition] = useTransition()
    const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA | null>(null);
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      educationLevel: "",
      age:"", 
    },
  });

  const handleCaptchaChange = () => {
    if (recaptchaRef.current) {
      const value = recaptchaRef.current.getValue();
      setCaptchaValue(value);
      console.log(value);
    }
  };

 const onSubmit = (data: FormSchemaType) => {
    if (!captchaValue) {
      setError("Veuillez vérifier le CAPTCHA avant de continuer.");
      return;
    }
    setError(undefined); 
    onNext(data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
    <CardWrapper 
        headerLabel="Veuillez vous identifier"
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
                           name="firstName"
                           render={({field}) => (
                            <FormItem>
                                <FormLabel>Nom</FormLabel>
                                <FormControl>
                                    <Input 
                                    {...field}
                                    disabled={isPending}
                                    id="firstName"
                                    placeholder='Jon'
                                    type='text'
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                           )}
                           />
                            <FormField 
                           control={form.control}
                           name="lastName"
                           render={({field}) => (
                            <FormItem>
                                <FormLabel>Prenom</FormLabel>
                                <FormControl>
                                    <Input 
                                    {...field}
                                    disabled={isPending}
                                    id="lastName"
                                    placeholder='Snow'
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
                                    id="age"
                                    placeholder=''
                                    type="text"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                           )}
                           />
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
                                    id="email"
                                    placeholder='JonSnow@exemple.com'
                                    type='email'
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                           )}
                           />
                           <FormField 
                           control={form.control}
                           name="phoneNumber"
                           render={({field}) => (
                            <FormItem>
                                <FormLabel>Numéro de téléphone</FormLabel>
                                <FormControl>
                                    <Input 
                                    {...field}
                                    disabled={isPending}
                                    id="phoneNumber"
                                    placeholder='52 000 000'
                                    type='tel'
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                           )}
                           />
                           <FormField 
                           control={form.control}
                           name="educationLevel"
                           render={({field}) => (
                            <FormItem>
                                <FormLabel>Niveau d'éducation</FormLabel>
                                <FormControl>
                                    <Input 
                                    {...field}
                                    disabled={isPending}
                                    id="educationLevel"
                                    placeholder='Licence, baccalauréat...'
                                    type='text'
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                           )}
                           />
                           
                        </div>
                        <div className="flex items-center justify-center ">
                        <ReCAPTCHA 
                ref={recaptchaRef}
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
                onChange={handleCaptchaChange}
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
        </div>
  );
};

export default Step1;
