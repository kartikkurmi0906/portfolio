import Hero from "../section/Home/Hero";
import ProjectGrid from "../section/Home/Project";
import AboutSection from "../section/Home/About";
import Footer from "../layout/Footer";
import ViewProjects from "../section/Home/ViewProjects";
import SkillsSection from "../section/Home/Skills";
export default function Home() {
  return (
    <div className="bg-[#121212] min-h-screen">
      <Hero />
      <AboutSection />
      <SkillsSection />
      <ProjectGrid />
      <ViewProjects />
      <Footer />
    </div>
  );
}