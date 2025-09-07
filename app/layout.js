import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "CraftKit – Free ATS Friendly Resume Builder",
    template: "%s | CraftKit", // every page can override
  },
  verification: {
    google: "7sfKXKSH7wNEN3rKoeWTTUnoBqOy4qKP38PogPuC12Q",
  },
  description:
    "Build beautiful, ATS-friendly resumes for free with CraftKit. Export to PDF instantly.",
  keywords: [
    "resume builder",
    "free resume",
    "ATS resume",
    "job applications",
  ],
  authors: [{ name: "CraftKit Team", url: "https://craftkit.netlify.app" }],
  openGraph: {
    title: "CraftKit – Free ATS Friendly Resume Builder",
    description:
      "Build beautiful, ATS-friendly resumes for free with CraftKit. Export to PDF instantly.",
    url: "https://craftkit.netlify.app",
    siteName: "CraftKit",
    images: [
      {
        url: "/craftkitlogo.png", // place in /public
        width: 1200,
        height: 630,
        alt: "CraftKit Resume Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CraftKit – Free ATS Friendly Resume Builder",
    description:
      "Build beautiful, ATS-friendly resumes for free with CraftKit. Export to PDF instantly.",
    images: ["/craftkitlogo.png"],
    creator: "@hammadm1r",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/craftkitmono.svg", type: "image/x-icon" },
      { url: "/craftkitmono.svg", type: "image/png", sizes: "32x32" },
      { url: "/craftkitmono.svg", type: "image/png", sizes: "16x16" },
    ],
    shortcut: "/craftkitmono.svg",
    apple: "/craftkitmono.svg", 
  },
  manifest: "/site.webmanifest",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
