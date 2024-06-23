// components/formulaire/steps/TestFrenchRadioForm.tsx
"use client";

import { FC } from "react";
import { useFormContext } from "react-hook-form";
import { FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

interface RadioFormProps {
  name: string;
  label: string | React.ReactNode;
  a: string;
  b: string;
  c: string;
  d: string;
  qt: string;
  correctAnswer: string;
}

const TestFrenchRadioForm: FC<RadioFormProps> = ({ name, label, a, b, c, d, qt, correctAnswer }) => {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="mb-6">
          <FormLabel>{label}</FormLabel>
          <div className="flex flex-col space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                {...field}
                value="First"
                checked={field.value === "First"}
                className="mr-2"
                data-correct={correctAnswer === "First" ? "1" : "0"}
                data-qt={qt}
              />
              {a}
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                {...field}
                value="Second"
                checked={field.value === "Second"}
                className="mr-2"
                data-correct={correctAnswer === "Second" ? "1" : "0"}
                data-qt={qt}
              />
              {b}
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                {...field}
                value="Third"
                checked={field.value === "Third"}
                className="mr-2"
                data-correct={correctAnswer === "Third" ? "1" : "0"}
                data-qt={qt}
              />
              {c}
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                {...field}
                value="Fourth"
                checked={field.value === "Fourth"}
                className="mr-2"
                data-correct={correctAnswer === "Fourth" ? "1" : "0"}
                data-qt={qt}
              />
              {d}
            </label>
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default TestFrenchRadioForm;
