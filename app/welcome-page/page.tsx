"use client";
import { useState } from "react";
 
import Step1 from "@/components/formulaire/steps/Step1";
import Step2 from "@/components/formulaire/steps/Step2";
import Step3 from "@/components/formulaire/steps/Step3";
import Step4 from "@/components/formulaire/steps/Step4";
import TestFrench from "@/components/formulaire/steps/TestFrench";
import type { FormSchemaType } from "@/components/formulaire/steps/Step1";

const Welcomepage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState<FormSchemaType | null>(null);
  const [experience, setExperience] = useState(0)
  const [conscience, setConscience] = useState(0)
  const [extraversion, setExtraversion] = useState(0)
  const [agreabilite, setAgreabilite] = useState(0)
  const [nervosisme, setNervosisme] = useState(0)
  const [score3, setScore3] = useState(0);
  const [frenchScore, setFrenchScore] = useState(0); 

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
    setFrenchScore(calculatedScore); 
  };

  const handleExperienceCalculated = (calculatedScore: number) => {
    setExperience(calculatedScore);
  };

  const handleConscienceCalculated = (calculatedScore: number) => {
    setConscience(calculatedScore);
  };

  const handleExtraversionCalculated = (calculatedScore: number) => {
    setExtraversion(calculatedScore);
  };

  const handleAgreabiliteCalculated = (calculatedScore: number) => {
    setAgreabilite(calculatedScore);
  };

  const handleNervosismeCalculated = (calculatedScore: number) => {
    setNervosisme(calculatedScore);
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
          onScoreCalculated={handleFrenchScoreCalculated} 
        />
      )}
      {currentStep === 3 && (
        <Step2
          onPrev={handlePrevStep}
          onNext={() => handleNextStep()}
          experience={handleExperienceCalculated}
          conscience={handleConscienceCalculated}
          extraversion={handleExtraversionCalculated}
          agreabilite={handleAgreabiliteCalculated}
          nervosisme={handleNervosismeCalculated}
          
          
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
          experience = {experience}
          conscience = {conscience}
          extraversion = {extraversion}
          agreabilite = {agreabilite}
          nervosisme = {nervosisme}
          score3={score3}
          frenchScore={frenchScore} 
        />
      )}
    </div>
  );
};

export default Welcomepage;
