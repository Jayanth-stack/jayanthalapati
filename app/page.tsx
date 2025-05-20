import Approach from "@/Components/Approach";
import Experience from "@/Components/Experience";
import Footer from "@/Components/Footer";
import Grid from "@/Components/Grid";
import Hero from "@/Components/Hero";
import RecentProjects from "@/Components/RecentProjects";
import { FloatingNav } from "@/Components/ui/FloatingNav";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="relative bg-black-100 flex flex-col mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full mx-auto">
          <FloatingNav navItems={[
            {name : 'Home' , link:'/', icon: <FaHome/>}
          ]}/>
          <Hero/>
          <div className="py-16" id="about">
            <Grid/>
          </div>
          <div className="py-16">
            <RecentProjects/>
          </div>
          <div className="py-16">
            <Experience/>
          </div>
          <div className="py-16">
            <Approach/>
          </div>
          <Footer/>
          <SpeedInsights/>
        </div>
      </div>
    </main>
  ); 
}
