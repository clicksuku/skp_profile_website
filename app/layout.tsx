import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sundara Kumar | Technology Leader",
  description: "The personal portfolio of Sundara Kumar, a technology leader building and scaling platforms across AI, payments, fintech, and commerce.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
