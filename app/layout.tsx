import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Darshit Chovatiya | Portfolio",

    template: "%s | Darshit Chovatiya",
  },

  description: "A passionate Full-stack Developer from India.",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  openGraph: {
    title: "Darshit Chovatiya | Portfolio",

    description: "A passionate Full-stack Developer from India.",

    siteName: "Darshit Chovatiya",

    url: "https://darshit-chovatiya.vercel.app/",

    type: "website",

    images: [
      {
        url: "https://darshit-chovatiya.vercel.app/default-og-image.webp",

        width: 800,

        height: 600,

        alt: "Darshit Chovatiya",
      },
    ],

    profile: {
      firstName: "Darshit",

      lastName: "Chovatiya",

      username: "Darshit Chovatiya",

      gender: "male",
    },
  },

  robots: "index,follow",

  canonical: "https://darshit-chovatiya.vercel.app/",

  keywords:
    "Software Developer, Web Developer, Programmer, JavaScript, React, Next.js, Portfolio",

  authors: [{ name: "Darshit Chovatiya" }],
};

import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${inter.className} bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
