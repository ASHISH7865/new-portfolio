"use client";
import React, { useEffect, useState } from "react";
import { ThemeProvider as NextThemeProvider } from "next-themes";

const Theme = ({ children }: { children: React.ReactNode }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {mounted && (
        <NextThemeProvider enableSystem={true} attribute="class">
          {children}
        </NextThemeProvider>
      )}
    </>
  );
};

export default Theme;
