import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Darius Rowser - AI Engineer & Data Analyst",
  description: "Interactive AI-powered portfolio showcasing ML engineering, NLP, and agentic AI capabilities. Built by Darius Rowser.",
  keywords: ["AI Engineer", "Machine Learning", "NLP", "Agentic AI", "Data Science", "Portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
