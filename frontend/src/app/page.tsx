import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "next-themes";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
     </>
  );
}
