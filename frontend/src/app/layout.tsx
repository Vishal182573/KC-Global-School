import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import FloatingAdmissionForm from "@/components/shared/AdmissionFormGlobal";

const poppins = Poppins({
  weight: ['400', '700'], // Add the necessary font weights here
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "KC GLOBAL SCHOOL",
  description:"Discover a world of opportunities at Kc Global School. Join us in shaping the future.",
  icons:{
    icon:[
      '/favicon.ico?v=1'
    ],
    apple:[
      '/apple-touch-icon.png?v=4'
    ],
    shortcut:[
      '/apple-touch-icon.png'
    ]
  },
  manifest:'/site.webmanifest'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          "bg-blue-50",
          poppins.variable
        )}
      >
        <header className="sticky top-0 z-50 bg-white shadow-md">
          <Navbar />
        </header>
        <main className="flex-grow ">{children} <FloatingAdmissionForm/></main>
        <Footer />
      </body>
    </html>
  );
}
