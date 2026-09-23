import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chandan Burnwal | Director - Technology Consulting (EY) | Enterprise Digital Leader",
  description: "Director of Technology Consulting at Ernst & Young (EY). 23+ years of experience in Enterprise Digital Transformation, SAP S/4HANA, Industry 4.0, Supply Chain, and CIO Leadership.",
  keywords: [
    "Chandan Burnwal",
    "Ernst & Young",
    "EY Director",
    "CIO",
    "Chief Information Officer",
    "SAP S/4HANA",
    "Supply Chain Management",
    "Industry 4.0",
    "Generative AI",
    "Digital Transformation"
  ],
  authors: [{ name: "Chandan Burnwal" }],
  icons: {
    icon: "/chandan_burnwal.jpg",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#080b12] text-slate-100 antialiased selection:bg-cyan-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}
