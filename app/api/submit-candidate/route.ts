import { NextResponse } from "next/server";
import prisma from "@/lib/prismaDb"; // Ensure this path is correct

export async function POST(request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phoneNumber, educationLevel, age, testsPsychotechniquesScore, iqTestScore, frenchScore } = body;
 
    console.log(body);
    // Validate if the body fields are not empty
    console.log("Validation failed. Missing fields:", { firstName, lastName, email, phoneNumber, educationLevel, age, testsPsychotechniquesScore, iqTestScore, frenchScore });

    if (
      !firstName || 
      !lastName || 
      !email || 
      !phoneNumber || 
      !educationLevel || 
      !age ||
      testsPsychotechniquesScore === undefined || 
      iqTestScore === undefined || 
      frenchScore === undefined
    ) {
      return NextResponse.json(
        {
          message: "All fields are required.",
        },
        { status: 400 }
      );
    }

    const candidate = await prisma.candidate.create({
      data: {
        firstName,
        lastName,
        email,
        phoneNumber,
        educationLevel,
        age,
        testsPsychotechniquesScore,
        iqTestScore,
        frenchScore,
      },
    });

    return NextResponse.json(candidate, { status: 200 });
  } catch (error) {
    console.error("Error creating candidate:", error);
    return NextResponse.json(
      {
        message: "An error occurred.",
      },
      { status: 500 }
    );
  }
}
