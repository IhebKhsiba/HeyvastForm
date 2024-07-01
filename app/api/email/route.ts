import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(request: NextRequest) {
  const { userData, score3, experience, agreabilite, extraversion, nervosisme, conscience, frenchScore} = await request.json();
  console.log(userData)
  const transport = nodemailer.createTransport({
    host: "heyvast.com",
      port: 465,
      secure: true,

    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.SMTP_EMAIL,
    to: `${process.env.SMTP_EMAIL}, ${process.env.SMTP_EMAIL_IHEB}`,

    subject: `Voici le résultat du/de la candidat(e) (${userData.firstName} ${userData.lastName} )`,
    text: ` 
    Âge : ${userData.age} \n
    Email : ${userData.email} \n
    Numéro de téléphone : ${userData.phoneNumber} \n 
    Niveau d'éducation : ${userData.educationLevel} \n
    Ouverture à l'expérience : ${experience}% \n
    Conscience : ${conscience}% \n 
    Extraversion : ${extraversion}% \n 
    Agréabilité : ${agreabilite}% \n 
    Névrosisme : ${nervosisme}% \n   
    Note en français : ${frenchScore}/48 \n 
    Note en Qi et Matrice : ${score3}/19 ` ,
          
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve('Email sent');
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: 'Email sent' });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}