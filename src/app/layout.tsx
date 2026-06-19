import type { Metadata } from "next";
import {Inter, Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Providers } from "./providers";
import { ScrollToTopButton } from "@/components/layout/ScrollToTopButton";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Neon Apps",
  description: "Neon Apps Staff Portal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", inter.variable)} suppressHydrationWarning>
      <body
        className={cn(inter.className, poppins.className, "antialiased")}
      >
        <Providers>
          {children}
          
          <ScrollToTopButton />
        </Providers>
      </body>
    </html>
  );
}
