import { Header } from "@/app/components/layout/Header";
import { Footer } from "@/app/components/layout/Footer";
import { Hero } from "@/app/components/sections/Hero";
import { Projects } from "@/app/components/sections/Projects";
import { Experience } from "@/app/components/sections/Experience";
import { TechStack } from "@/app/components/sections/TechStack";
import { Contact } from "@/app/components/sections/Contact";
import { PageLoader } from "@/app/components/ui/PageLoader";

export default function Home() {
  return (
    <div className="atmosphere min-h-screen">
      <PageLoader />
      <div className="app-shell">
        <Header />
        <main>
          <Hero />
          <Projects />
          <Experience />
          <TechStack />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
