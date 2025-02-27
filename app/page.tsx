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
    <main>
      <div className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <FloatingNav navItems={[
            {name : 'Home' , link:'/', icon: <FaHome/>}
          ]}/>
          <Hero/>
          <Grid/>
          <RecentProjects/>
          <Experience></Experience>
          <Approach/>
          <Footer/>
          <SpeedInsights/>
          
        </div>
      </div>

    </main>
  ); 
}
