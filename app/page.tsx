import AboutSection from "@/components/homepage/about/About";
import ContactSection from "@/components/homepage/contact/Contact";
import Education from "@/components/homepage/education/Education";
import Experience from "@/components/homepage/experience/Experience";

import HeroSection from "@/components/homepage/hero-section/HeroSec";
import Projects from "@/components/homepage/projects/Projects";
import Skills from "@/components/homepage/skills/Skills";

export default async function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <ContactSection />
    </div>
  );
}
