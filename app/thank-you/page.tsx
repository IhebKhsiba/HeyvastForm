import { useRouter } from "next/router";
import { useEffect } from "react";

const ThankYou = () => {
  const router = useRouter();

  // Redirect to home page after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full text-center">
        <h1 className="text-4xl font-bold text-green-600 mb-4">Thank You!</h1>
        <p className="text-lg text-gray-700 mb-6">Your submission has been received successfully.</p>
        <p className="text-sm text-gray-500 mb-8">
          You will be redirected to the home page shortly. If you are not redirected, click the button below.
        </p>
        <button
          className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
          onClick={() => router.push("/")}
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default ThankYou;
