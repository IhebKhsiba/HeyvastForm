"use client";
import { useState } from "react";
 
import Step1 from "@/components/formulaire/steps/Step1";
import Step2 from "@/components/formulaire/steps/Step2";
import Step3 from "@/components/formulaire/steps/Step3";
import Step4 from "@/components/formulaire/steps/Step4";
import TestFrench from "@/components/formulaire/steps/TestFrench";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { FormSchemaType } from "@/components/formulaire/steps/Step1";

const Welcomepage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState<FormSchemaType | null>(null);
  const [score2, setScore2] = useState(0);
  const [score3, setScore3] = useState(0);
  const [frenchScore, setFrenchScore] = useState(0); // New state for French test score

  const handleNextStep = (data?: FormSchemaType) => {
    if (data && currentStep === 1) {
      setUserData(data);
    }
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleFrenchScoreCalculated = (calculatedScore: number) => {
    setFrenchScore(calculatedScore); // New function to handle French test score
  };

  const handleScore2Calculated = (calculatedScore: number) => {
    setScore2(calculatedScore);
  };

  const handleScore3Calculated = (calculatedScore: number) => {
    setScore3(calculatedScore);
  };

  return (
    <div className="container mx-auto p-4">
      {currentStep === 1 && <Step1 onNext={handleNextStep} />}
      {currentStep === 2 && (
        <TestFrench
          onPrev={handlePrevStep}
          onNext={() => handleNextStep()}
          onScoreCalculated={handleFrenchScoreCalculated} // Pass the score handler for French test
        />
      )}
      {currentStep === 3 && (
        <Step2
          onPrev={handlePrevStep}
          onNext={() => handleNextStep()}
          onScoreCalculated={handleScore2Calculated}
        />
      )}
      {currentStep === 4 && (
        <Step3
          onPrev={handlePrevStep}
          onNext={() => handleNextStep()}
          onScoreCalculated={handleScore3Calculated}
        />
      )}
      {currentStep === 5 && userData && (
        <Step4
          onPrev={handlePrevStep}
          userData={userData}
          score2={score2}
          score3={score3}
          frenchScore={frenchScore} // Pass the French test score to Step4
        />
      )}
    </div>
  );
};

export default Welcomepage;
