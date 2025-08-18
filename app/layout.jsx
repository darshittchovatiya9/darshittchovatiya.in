import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import KProvider from "./components/common/KProvider";
import CommandBarInvokar from "./components/common/CommandBarInvokar";
import LayoutWrapper from "./components/common/LayoutWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Darshit Chovatiya | Software Developer",
    template: "%s | Darshit Chovatiya",
  },
  description: "A passionate Software Developer from India.",
  openGraph: {
    title: "Darshit Chovatiya",
    description: "A passionate Software Developer from India.",
    siteName: "Darshit Chovatiya",
    url: "https://darshitchovatiya-in.vercel.app/",
    type: "website",
    images: [
      {
        url: "https://darshitchovatiya-in.vercel.app/default-og-image.png",
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
  instagram: {
    url: "https://www.instagram.com/_darshit_07_",
  },
  robots: "index,follow",
  canonical: "https://darshitchovatiya-in.vercel.app/",
  keywords:
    "Software Developer, Web Developer, Programmer, JavaScript, React, Next.js, Portfolio",
  author: "Darshit Chovatiya",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/x-icon"
          href="./icon.png"
          sizes="320x320"
        />
        <meta name="description" content={metadata.description} />
        <meta name="robots" content={metadata.robots} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta
          property="og:image:alt"
          content={metadata.openGraph.images[0].alt}
        />
        <meta
          property="og:image:width"
          content={metadata.openGraph.images[0].width}
        />
        <meta
          property="og:image:height"
          content={metadata.openGraph.images[0].height}
        />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <link rel="canonical" href={metadata.canonical} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />

        {/* Umami Analytics */}
        <script
          defer
          src="https://analytics.umami.is/script.js"
          data-website-id="58bd2a1c-b5e1-4842-b56b-9d1054f374c8"
        />
      </head>
      <body className={`${inter.className} bg-black text-white`}>
        <KProvider>
          <Providers>
            <LayoutWrapper>{children}</LayoutWrapper>
          </Providers>
          <CommandBarInvokar />
        </KProvider>
      </body>
    </html>
  );
}
