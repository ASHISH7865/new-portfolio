import type { Metadata } from "next";
import Theme from "@/components/Providers/Theme";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ashish Portfolio",
  description: "Ashish Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" >
      <body>
        <Theme>{children}</Theme>
      </body>
    </html>
  );
}
