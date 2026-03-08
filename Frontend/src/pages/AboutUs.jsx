import AboutHero from "../section/About/AboutHero";
import AboutStats from "../section/About/AboutStats";
import AboutTimeline from "../section/About/AboutTimeline";
import EducationCerts from "../section/About/EducationCerts";
import AboutBento from "../section/About/AboutBento";
import AboutResume from "../section/About/AboutResume";

export default function AboutPage() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen overflow-x-clip">
      <AboutHero />
      <AboutStats />
      <AboutTimeline />
      <AboutResume />
      <EducationCerts />
      <AboutBento />
    </main>
  );
}