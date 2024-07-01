"use client";
import { sendEmail } from '@/utils/send-email'
import { FC } from "react";
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import { Progress } from "@nextui-org/progress"


export interface Step4Props {
  userData: {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    educationLevel: string;
    age: string;
  };
  experience: number;
  conscience: number;
  extraversion: number;
  agreabilite: number;
  nervosisme: number;
  
  score3: number;
  frenchScore: number; 
}


const Step4: FC<Step4Props> = ({ userData,experience,conscience,extraversion,agreabilite,nervosisme,score3, frenchScore }) => {
  const router = useRouter();

  const handleSubmit = async () => {
    const response = await fetch('/api/submit-candidate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: userData.firstName,
        lastName: userData.lastName,
        phoneNumber: userData.phoneNumber,
        email: userData.email,
        educationLevel: userData.educationLevel,
        age: userData.age,
        experience: experience,
        conscience: conscience,
        extraversion: extraversion,
        agreabilite: agreabilite,
        nervosisme: nervosisme,
        

        iqTestScore: score3,
        frenchScore: frenchScore,
      }),
    });
    console.log(experience,extraversion,nervosisme,agreabilite,conscience)
    if (response.ok) {
      console.log('Data saved successfully');
      await sendEmail({ userData,experience,conscience,extraversion,agreabilite,nervosisme, score3, frenchScore }); 
      router.push('/thank-you');
    } else {
      console.error('Failed to save data');

    }
  };


  type Color = "danger" | "warning" | "success" | "default" | "secondary" | "primary" | undefined;

  const getColorTwo = (value: number):Color =>{
    if (value < 5) {
      return "danger";
  }else if (value >= 5 && value <= 10){
    return "warning";
  }else {
    return "success";
  }
}

const getColorP = (value: number):Color =>{
  if (value < 20) {
    return "danger";
}else if (value >= 20 && value <= 50){
  return "primary";
}else {
  return "success";
}
}
  
  const getColor = (value: number): Color => {
    if (value < 15) {
      return "danger";
    } else if (value >= 15 && value <= 30) {
      return "warning";
    } else {
      return "success";
    }
  };

  return (
    <Card className="shadow-lg rounded-lg p-6">
      <CardHeader>
        <CardTitle className="text-xl text-center">Résultat.</CardTitle>
        <CardDescription className="text-center">
        Veuillez contacter l'administration s'il y a une erreur dans vos informations personnelles.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <h2 className="text-lg font-bold">Votre Fiche:</h2>
          <p><strong>Nom : </strong> {userData.firstName}</p>
          <p><strong>Prénom : </strong> {userData.lastName}</p>
          <p><strong>Email : </strong> {userData.email}</p>
          <p><strong>Numéro de téléphone : </strong> {userData.phoneNumber}</p>
          <p><strong>Niveau d'éducation : </strong> {userData.educationLevel}</p>
          <p><strong>Âge : </strong> {userData.age}</p>

          <h2 className="text-lg text-center font-bold">Profil selon le test</h2>
          
          <p><strong>Ouverture à l'expérience : </strong></p>
          <div className="border-solid border-2 border-gray-300 rounded-full ...">
          <Progress  maxValue={100} color={getColorP(experience)} aria-label="Ouverture à l'expérience" value={experience} /> 
          </div>

          <p><strong>Conscience : </strong></p>
          <div className="border-solid border-2 border-gray-300 rounded-full ...">
          <Progress  maxValue={100} color={getColorP(conscience)} aria-label="Conscience" value={conscience} /> 
          </div>

          <p><strong>Extraversion : </strong></p>
          <div className="border-solid border-2 border-gray-300 rounded-full ...">
          <Progress  maxValue={100} color={getColorP(extraversion)} aria-label="Extraversion" value={extraversion} /> 
          </div>

          <p><strong>Agréabilité : </strong></p>
          <div className="border-solid border-2 border-gray-300 rounded-full ...">
          <Progress  maxValue={100} color={getColorP(agreabilite)} aria-label="Agréabilité" value={agreabilite} /> 
          </div>

          <p><strong>Névrosisme : </strong></p>
          <div className="border-solid border-2 border-gray-300 rounded-full ...">
          <Progress  maxValue={100} color={getColorP(nervosisme)} aria-label="Névrosisme" value={nervosisme} /> 
          </div>



          <h2 className="text-lg text-center font-bold">Votre résultat</h2>
          <p><strong>Score Francais:</strong> {frenchScore}/48</p>
          <div className="border-solid border-2 border-gray-300 rounded-full ...">
          <Progress maxValue={48} color={getColor(frenchScore)} aria-label="votre francais" value={frenchScore} /> 
          </div>
          <p><strong>Score QI & Matrice:</strong> {score3}/19</p>
          <div className="border-solid border-2 border-gray-300 rounded-full ...">
          <Progress  maxValue={19} color={getColorTwo(score3)} aria-label="votre QI" value={score3} />
          </div>
          <div className="flex flex-col gap-6 w-full max-w-md">
         
         
          
          
          </div> 
        </div>
        <div className="mt-8 flex justify-end">
          <Button type="button" onClick={handleSubmit}>Confirmer</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Step4;
