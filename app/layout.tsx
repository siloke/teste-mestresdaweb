import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import localFont from 'next/font/local'

const marvelFont = localFont({ src: './fonts/MarvelRegular-Dj83.ttf' })

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marvel",
  description: "Marvel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}  
      </body>
    </html>
  );
}
