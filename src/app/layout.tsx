import type { Metadata } from "next";
import "./globals.css";
import { LenisWrapper } from "@/components/LenisWrapper";
import { Chatbot } from "@/components/Chatbot";

// Using system font stack instead of Google Fonts to work offline and avoid
// build-time network requests. Inter-compatible on macOS/Windows/Linux.
export const metadata: Metadata = {
  title: "Dhawan Orthopaedic Hospital | Ambala",
  description:
    "A premium, high-tech orthopaedic facility in Ambala, Haryana. World-class joint replacement, spine surgery, and rehabilitation.",
  keywords: "orthopaedic hospital ambala, knee replacement haryana, dr dhawan ortho",
  openGraph: {
    title: "Dhawan Orthopaedic Hospital | Ambala",
    description: "World-class orthopaedic care in Ambala, Haryana.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        <LenisWrapper>{children}</LenisWrapper>
        <Chatbot />
      </body>
    </html>
  );
}
