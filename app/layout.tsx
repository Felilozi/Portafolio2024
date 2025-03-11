import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Header from "@/components/header";




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
      <body className={`${urbanist.className} flex flex-col min-h-screen`}>
        <Navbar/>
        <Header />
      {children}
      </body>
    </html>
  );
}
