import React from 'react'
import { useState, useRef } from 'react'
import Image from 'next/image'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const RadioFormFifth = ({form, name, label, a, b, c, d, e, qt, correctAnswer}) => {

const radioRef = useRef(null)

const onRadioChange = (value: string) => {
  console.log("Radio changed")
  console.log(correctAnswer)
  console.log(value)
  if(radioRef.current){
  if (value === correctAnswer) {
    radioRef.current.setAttribute("correct", 1)
  }else {
    radioRef.current.setAttribute("correct", 0)
  }
}
}  
  
  return (
    <>
    <FormField
          control={form.control}
          name={name}
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel className=''>{label}</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={onRadioChange}
                  defaultValue={field.value}
                  ref={radioRef}
                  className={"qt-"+qt+" flex flex-col space-y-1"}
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="First" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      A. {a}
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="Second" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      B. {b}
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="Third" />
                    </FormControl>
                    <FormLabel className="font-normal">C. {c}</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="Fourth" />
                    </FormControl>
                    <FormLabel className="font-normal">D. {d}</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="Fifth" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      E. {e}
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

    </>
  )
}

export default RadioFormFifth