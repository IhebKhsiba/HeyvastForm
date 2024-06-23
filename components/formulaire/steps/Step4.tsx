"use client";

import { FC } from "react";
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface Step4Props {
  userData: {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    educationLevel: string;
    dob: string | null;
  };
  score2: number;
  score3: number;
  frenchScore: number; // New prop for French test score
}

const Step4: FC<Step4Props> = ({ userData, score2, score3, frenchScore }) => {
  const router = useRouter();

  const handleSubmit = async () => {
    const response = await fetch('/api/submit-candidate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName : userData.firstName,
        lastName : userData.lastName,
        phoneNumber : userData.phoneNumber,
        email : userData.email ,
        educationLevel : userData.educationLevel,
        dob: userData.dob,
        testsPsychotechniquesScore: score2,
        iqTestScore: score3,
        frenchScore : frenchScore,
      }),
    });

    if (response.ok) {
      console.log('Data saved successfully');
      router.push('/thank-you');
      // Optionally handle successful submission, like redirecting or showing a success message
    } else {
      console.error('Failed to save data');
      // Optionally handle errors, like showing an error message
    }
  };

  return (
    <Card className="shadow-lg rounded-lg p-6">
      <CardHeader>
        <CardTitle className="text-xl text-center">Summary</CardTitle>
        <CardDescription className="text-center">
          Review your information and scores
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <h2 className="text-lg font-bold">User Information:</h2>
          <p><strong>First Name:</strong> {userData.firstName}</p>
          <p><strong>Last Name:</strong> {userData.lastName}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>Phone Number:</strong> {userData.phoneNumber}</p>
          <p><strong>Education Level:</strong> {userData.educationLevel}</p>
          <p><strong>Date of Birth:</strong> {userData.dob}</p>

          <h2 className="text-lg font-bold">Scores:</h2>
          <p><strong>French Test Score:</strong> {frenchScore}</p>
          <p><strong>Tests Psychotechniques Score:</strong> {score2}</p>
          <p><strong>IQ Test Score:</strong> {score3}</p>
        </div>
        <div className="mt-8 flex justify-end">
          <Button type="button" onClick={handleSubmit}>Finish</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Step4;
