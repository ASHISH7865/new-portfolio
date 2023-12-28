import type { Metadata } from "next";
import Theme from "@/components/Providers/Theme";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Suspense } from "react";
import { getHeader } from "@/lib/request/getRequest";
import Navbar from "@/components/PageComponents/Navbar/Navbar";
import {Inter} from "next/font/google";
import Contact from "@/components/PageComponents/Contact/Contact";
export const metadata: Metadata = {
  title: "Ashish Portfolio",
  description: "Ashish Portfolio",
};
const inter = Inter({subsets : ["latin"]})

export default async function RootLayout({ children }: { children: React.ReactNode }) {

  const data = await getHeader();
  return (
    <html lang="en">
      <body className={`${inter.className} p-5 `}>
        <Suspense fallback={<div>Loading...</div>}>
          <Theme>
            <Navbar {...data} />
            {children}
            <Contact />
          </Theme>
          <Toaster />
        </Suspense>
      </body>
    </html>
  );
}
