import type { Metadata, Viewport } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Abdur Rahman Palash - Tech Portfolio",
    template: "%s | Abdur Rahman Palash",
  },
  description: "Professional portfolio showcasing software development projects, technical skills, and professional experience in web development and technology.",
  keywords: ["portfolio", "software developer", "web development", "React", "Next.js", "TypeScript", "JavaScript"],
  authors: [{ name: "Abdur Rahman Palash" }],
  creator: "Abdur Rahman Palash",
  publisher: "Abdur Rahman Palash",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://abdurrahmanpalash.dev"), // Replace with actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abdurrahmanpalash.dev",
    title: "Abdur Rahman Palash - Tech Portfolio",
    description: "Professional portfolio showcasing software development projects and technical expertise.",
    siteName: "Abdur Rahman Palash Portfolio",
    images: [
      {
        url: "/og-image.jpg", // Add this image to public folder
        width: 1200,
        height: 630,
        alt: "Abdur Rahman Palash - Tech Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdur Rahman Palash - Tech Portfolio",
    description: "Professional portfolio showcasing software development projects and technical expertise.",
    creator: "@yourtwitterhandle", // Replace with actual Twitter handle
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <body
        className={`${inter.variable} ${robotoMono.variable} font-sans antialiased bg-background text-foreground dark:bg-background dark:text-foreground transition-colors duration-300`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-background px-4 py-2 rounded-md z-50"
        >
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Abdur Rahman Palash",
              "jobTitle": "Full-Stack Developer & UI/UX Designer",
              "url": "https://abdurrahmanpalash.dev",
              "sameAs": [
                "https://github.com/abdurrahmanpalash",
                "https://linkedin.com/in/abdurrahmanpalash"
              ],
              "knowsAbout": [
                "Web Development",
                "React",
                "Next.js",
                "TypeScript",
                "Node.js",
                "UI/UX Design"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "Bangladesh"
              }
            })
          }}
        />
        <Navbar />
        <main id="main-content" className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
