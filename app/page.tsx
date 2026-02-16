import Approach from "@/Components/Approach";
import Experience from "@/Components/Experience";
import Footer from "@/Components/Footer";
import Grid from "@/Components/Grid";
import Hero from "@/Components/Hero";
import RecentProjects from "@/Components/RecentProjects";
import SkillHighlights from "@/Components/SkillHighlights";
import { FloatingNav } from "@/Components/ui/FloatingNav";
import { navItems } from "@/data";
import { FaHome } from "react-icons/fa";
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="relative bg-black-100 flex flex-col mx-auto sm:px-10 px-5">
        <div className="section-shell">
          <FloatingNav navItems={[{ name: "Home", link: "/", icon: <FaHome /> }, ...navItems]} />
          <Hero />
          <div className="section-spacing" id="about">
            <Grid />
          </div>
          <div className="section-spacing" id="projects">
            <RecentProjects />
          </div>
          <div className="section-spacing" id="experience">
            <Experience />
          </div>
          <SkillHighlights />
          <div className="section-spacing">
            <Approach />
          </div>
          <Footer />
          <SpeedInsights />
        </div>
      </div>
    </main>
  );
}
