import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mohsen Nouri — Full-Stack Software Developer",
  description:
    "Portfolio of Mohsen Nouri, a full-stack software developer building end-to-end products with React, Next.js, Go, Node.js, and modern data systems.",
  openGraph: {
    title: "Mohsen Nouri — Full-Stack Software Developer",
    description:
      "Full-stack product engineering across React and Next.js interfaces, Go and Node.js services, APIs, databases, caching, testing, and delivery.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
