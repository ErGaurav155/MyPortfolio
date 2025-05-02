import AboutSection from "@/components/homepage/about/About";
import ContactSection from "@/components/homepage/contact/Contact";
import Education from "@/components/homepage/education/Education";
import Experience from "@/components/homepage/experience/Experience";
import HeroSection from "@/components/homepage/hero-section/HeroSec";
import Projects from "@/components/homepage/projects/Projects";
import Skills from "@/components/homepage/skills/Skills";
import { Suspense } from "react";

export default async function Home() {
  return (
    <div className="flex flex-col gap-10">
      <Suspense fallback={<>Loading...</>}>
        <HeroSection />
        <AboutSection />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <ContactSection />
      </Suspense>
    </div>
  );
}
