import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import AdmissionForm from "@/components/forms/AdmissionQuery";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Modern School - Empowering Future Leaders",
  description:
    "Discover a world of opportunities at Modern School. Join us in shaping the future.",
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
          "min-h-screen bg-gray-50 font-sans antialiased flex flex-col",
          fontSans.variable
        )}
      >
        <header className="sticky top-0 z-50 bg-white shadow-md">
          <Navbar />
        </header>

        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
