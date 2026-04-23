import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  title: "Rutuja Patil | Full Stack Developer",
  description:
    "Personal portfolio of Rutuja Rajaram Patil — MCA graduate, passionate full-stack developer from Maharashtra. Explore my education, skills, and projects.",
  keywords: ["Rutuja Patil", "MCA", "Full Stack Developer", "Portfolio", "React", "Next.js"],
  authors: [{ name: "Rutuja Rajaram Patil" }],
  openGraph: {
    title: "Rutuja Patil | Full Stack Developer",
    description: "MCA graduate | Full Stack Developer | Maharashtra",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
