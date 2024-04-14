'use client'
import Hero from "@/components/PageComponents/Hero/Hero";
import Navbar from "@/components/PageComponents/Navbar/Navbar";
import Skills from "@/components/PageComponents/Skills/Skills";
import Projects from "@/components/PageComponents/Projects/Projects";
import Contact from "@/components/PageComponents/Contact/Contact";
import { Metadata } from "next";
import { portfolioConstant } from "@/lib/portfolioConstant";
import { AnimatedFeatureProjects } from "@/components/PageComponents/Projects/AnimatedFeatureProject";
import { useTheme } from "next-themes";
import { useEffect } from "react";

const componentMap = {
  Hero: Hero,
  Skills: Skills,
  Projects: Projects,
};

export default async function Home() {
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme("dark");
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Hero data={portfolioConstant?.herodata} />
      <Skills data={portfolioConstant.skillsData} />
      <AnimatedFeatureProjects />
      <Projects data={portfolioConstant.projectData} />
    </div>
  );
}
