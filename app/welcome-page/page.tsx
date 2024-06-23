// pages/welcomepage.tsx
"use client";
import { useState } from "react";
import Step1 from "@/components/formulaire/steps/Step1";
import Step2 from "@/components/formulaire/steps/Step2";
import Step3 from "@/components/formulaire/steps/Step3";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Welcomepage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [score, setScore] = useState(0);

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleScoreCalculated = (calculatedScore: number) => {
    setScore(calculatedScore);
    console.log(`Score: ${calculatedScore}`);
  };

  return (
    <div className="container mx-auto p-4">
      {currentStep === 1 && <Step1 onNext={handleNextStep} />}
      {currentStep === 2 && (
        <Step2 onPrev={handlePrevStep} onNext={handleNextStep} onScoreCalculated={handleScoreCalculated} />
      )}
      {currentStep === 3 && (
        <Step3 onPrev={handlePrevStep} onNext={handleNextStep} onScoreCalculated={handleScoreCalculated} />
      )}
      {currentStep === 4 && (
        <Card className="shadow-lg rounded-lg p-6">
          <div className="flex justify-center">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              Tests psychotechniques
            </h1>
          </div>
          <p className="text-center text-xl">Your IQ Test Score: {score}</p>
          <div className="mt-8 flex justify-end">
            <Button type="button" onClick={handlePrevStep}>Back</Button>
          </div>
        </Card>
      )}
    </div>
  );
};

export default Welcomepage;
