import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import ClientLayoutWrapper from "@/components/site/ClientLayoutWrapper";
import "../styles.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dhawan Orthopaedic Hospital — Advanced Orthopaedic & Trauma Care",
  description: "Trusted orthopaedic excellence with advanced recovery and rehabilitation. Joint replacement, trauma, spine, sports injury, physiotherapy, and nutrition.",
  openGraph: {
    title: "Dhawan Orthopaedic Hospital — Restore Mobility. Renew Life.",
    description: "World-class orthopaedic, physiotherapy, and nutrition care under one roof.",
    type: "website",
    images: [
      {
        url: "/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Dhawan Orthopaedic Hospital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhawan Orthopaedic Hospital — Advanced Orthopaedic & Trauma Care",
    description: "Trusted orthopaedic excellence with advanced recovery and rehabilitation.",
    images: ["/og-image.jpeg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`} suppressHydrationWarning>
      <head>
        {/* Pre-mount script to inject dark class instantly from localStorage */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme')||'dark';if(t==='dark')document.documentElement.classList.add('dark');else document.documentElement.classList.remove('dark');}catch(e){document.documentElement.classList.add('dark');}})();`,
          }}
        />
      </head>
      <body className="antialiased">
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  );
}
