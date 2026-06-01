import { Header } from "@/app/components/layout/Header";
import { Footer } from "@/app/components/layout/Footer";
import { Hero } from "@/app/components/sections/Hero";
import { Experience } from "@/app/components/sections/Experience";
import { Education } from "@/app/components/sections/Education";
import { TechStack } from "@/app/components/sections/TechStack";
import { Projects } from "@/app/components/sections/Projects";
import { Contact } from "@/app/components/sections/Contact";
import { PageLoader } from "@/app/components/ui/PageLoader";

export default function Home() {
  return (
    <>
      <PageLoader />
      <Header />
      <main>
        <Hero />
        <Experience />
        <TechStack />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
