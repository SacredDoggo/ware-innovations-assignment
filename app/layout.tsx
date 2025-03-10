import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import localFont from "next/font/local"

const montserrat = localFont({
  src: [
    {
      path: '../public/fonts/montserrat.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/montserrat-italic.ttf',
      weight: '400',
      style: 'italic',
    }
  ],
  variable: '--font-montserrat'
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
};
