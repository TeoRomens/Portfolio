import './globals.css'
import type { Metadata } from 'next'
import LocalFont from "next/font/local";
import { Inter } from 'next/font/google'
import React from "react";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Teo Romens',
  description: 'Portfolio Website of Matteo Roman',
}

const calSans = LocalFont({
  src: './public/fonts/CalSans-SemiBold.ttf',
  variable: "--font-calSans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={calSans.className}>{children}</body>
    </html>
  )
}
