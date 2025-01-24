import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

// შრიფტების კონფიგურაცია
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// მეტა ინფორმაცია
export const metadata: Metadata = {
  title: "Your App",
  description: "Your App Description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        {/* დამატებითი მეტა ტეგები */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="bg-gray-100 text-gray-900">
        <div className="flex flex-col min-h-screen">
          {/* ჰედერი */}
          <Header />

          {/* ძირითადი კონტენტი */}
          <main className="flex-1">{children}</main>

          {/* ფუთერი */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
