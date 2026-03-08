import ProjectHero from "../section/Project/ProjectHero";
import FeaturedDeployments from "../section/Project/FeaturedDeployments";
import TechnicalCore from "../section/Project/TechnicalCore";
import ProjectFooter from "../section/Project/ProjectFooter";
export default function Projects() {
  return (
    <div className="bg-[#0a0a0a]">
      <ProjectHero />
      <FeaturedDeployments />
      <TechnicalCore />
      <ProjectFooter />
    </div>
  );
}