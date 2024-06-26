import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   
       <div
        className={cn(
          " bg-gradient-to-b from-purple-600 to-blue-800 font-sans antialiased flex items-center justify-center",
          fontSans.variable
        )}
      >       
        {children}       
        </div>
   );
}