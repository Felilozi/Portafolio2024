import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portafolio de FeliLozi💻❤",
  description: "Landing page made by FeliLozi",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <Navbar/>
      {children}</body>
    </html>
  );
}
