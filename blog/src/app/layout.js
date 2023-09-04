import './globals.css'
import AppNavBar from "@/app/component/AppNavBar";
import Footer from "@/app/component/Footer";
import NewsLetter from "@/app/component/NewsLetter";
import React from "react";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-green-50 to-green-100 overflow-x-hidden ">
      {children}
      <NewsLetter/>
      <Footer/>
      </body>
    </html>
  )
}
