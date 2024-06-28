import { Step4Props } from '@/components/formulaire/steps/Step4';

const sendEmail = async (data: Step4Props) => {
  const apiEndpoint = '/api/email';

  try {
    const response = await fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    console.log(response)
    // if (response.ok) {
    //   const result = await response.json();
    //   alert(result.message);
    // } else {
    //   throw new Error('Failed to send email');
    // }
  } catch (error) {
    console.error('Error sending email:', error);
    alert('Error sending email');
  }
};

export { sendEmail };
