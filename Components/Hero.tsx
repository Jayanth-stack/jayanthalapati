import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { heroProofItems } from "@/data";
import { FaArrowRight, FaFileArrowDown } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="section-spacing section-shell relative pt-36">
      <div>
        <Spotlight
          className="-top-24 -left-24 md:-left-32 md:-top-20 h-[70vh] w-[55vw]"
          fill="white"
        />
      </div>
      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.02] bg-grid-black/[0.01] flex items-center justify-center fixed top-0 left-0 -z-10">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_22%,black)]" />
      </div>
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[72ch] flex flex-col items-center justify-center">
          <p className="caption-text uppercase tracking-[0.24em] text-center text-white-100">
            Senior Software Engineer - AI and Distributed Systems
          </p>
          <h1 className="display-text mt-4 text-center">
            Building reliable AI platforms and cloud-native systems at production scale.
          </h1>
          <p className="body-text mt-5 text-center max-w-[60ch]">
            I architect backend and platform systems with a strong bias for reliability,
            observability, and measurable business impact.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#projects"
              className="inline-flex h-11 items-center gap-2 rounded-full border border-white/20 bg-white text-black px-6 text-sm font-semibold transition-colors hover:bg-white/90"
            >
              View projects
              <FaArrowRight />
            </a>
            <a
              href="mailto:jayanthalapati@gmail.com?subject=Resume%20Request"
              className="inline-flex h-11 items-center gap-2 rounded-full border border-white/20 bg-transparent px-6 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Download resume
              <FaFileArrowDown />
            </a>
          </div>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 w-full">
            {heroProofItems.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-white/10 bg-black-200/70 px-4 py-4 text-center backdrop-blur-sm"
              >
                <p className="text-xl md:text-2xl font-semibold text-white">{item.value}</p>
                <p className="caption-text mt-1 text-white-100">{item.label}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
