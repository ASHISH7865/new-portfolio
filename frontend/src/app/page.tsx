import Hero from "@/components/PageComponents/Hero/Hero";
import Navbar from "@/components/PageComponents/Navbar/Navbar";
import Skills from "@/components/PageComponents/Skills/Skills";

export default function Home() {
  return (
    <div className="max-w-screen-2xl mx-auto p-4">
      <Navbar />
      <Hero />
      <Skills />
     </div>
  );
}
