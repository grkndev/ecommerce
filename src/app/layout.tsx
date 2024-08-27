import type { Metadata } from "next";
import { Space_Grotesk as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar/navbar";
import SessionProvider from "./SessionProvider";
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
export const metadata: Metadata = {
  title: "BBL Shop",
  description: "BBL Shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
