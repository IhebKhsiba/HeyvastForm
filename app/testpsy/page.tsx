
"use client"

import { useState } from "react";
import { RadioPsyForm } from "@/components/formulaire/radiopsy-form"
import { Questionnaire } from "@/components/formulaire/tableau-psy"
import TableDemo from "@/components/formulaire/explication-form";

const psyPage = () => {

  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };


  return (
    <div>
        <div className="flex justify-center ">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Tests psychotechniques</h1>
      </div>
      <h1>Tableau d'accord</h1>
      <TableDemo />
      <Questionnaire />
      <RadioPsyForm />
    </div>
  );
};

export default psyPage;
