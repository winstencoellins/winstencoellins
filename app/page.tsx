import AboutSection from "@/components/about";
import ContactSection from "@/components/contact";
import ExperienceSection from "@/components/experience";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero";
import Navbar from "@/components/navbar";
import ProjectSection from "@/components/projects";
import SkillSection from "@/components/skills";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <ExperienceSection />
      <ProjectSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
