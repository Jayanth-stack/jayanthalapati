"use client";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { FaArrowRight, FaGithub } from "react-icons/fa6";
import { projects } from "@/data";

const RecentProjects = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section-spacing section-shell">
      <h2 className="section-heading text-center">
        Selected <span className="text-purple">projects and platforms</span>
      </h2>
      <p className="body-text text-center mt-4 max-w-[72ch] mx-auto text-white-100">
        Each project is framed around a real constraint, the system I built, and the measurable outcome.
      </p>
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((item, index) => (
          <motion.article
            key={item.id}
            initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: reduceMotion ? 0 : index * 0.07 }}
            className="rounded-2xl border border-white/10 bg-black-200/60 p-5 md:p-6 backdrop-blur-sm"
          >
            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black-100 h-52">
              <Image src="/bg.png" alt="" fill priority={index < 2} className="object-cover opacity-60" />
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-contain p-4"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="mt-5">
              <h3 className="text-xl md:text-2xl font-semibold text-white">{item.title}</h3>
              <p className="body-text mt-2 text-white-100">{item.oneLiner}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.impactTags.map((tag) => (
                  <span
                    key={`${item.id}-${tag}`}
                    className="rounded-full border border-purple/40 bg-purple/10 px-3 py-1 text-xs font-medium text-purple"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-5 space-y-3">
                <p className="text-sm text-white">
                  <span className="text-white/70">Problem:</span> {item.problem}
                </p>
                <p className="text-sm text-white">
                  <span className="text-white/70">Built:</span> {item.build}
                </p>
                <p className="text-sm text-white">
                  <span className="text-white/70">Impact:</span> {item.impact}
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.iconLists.map((icon, iconIndex) => (
                  <span
                    key={`${item.id}-${iconIndex}`}
                    className="rounded-full border border-white/15 bg-black-100 p-2"
                  >
                    <Image src={icon} alt="" width={18} height={18} />
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={item.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 items-center gap-2 rounded-full border border-white/20 bg-white px-4 text-sm font-semibold text-black transition-colors hover:bg-white/90"
                >
                  Live demo
                  <FaArrowRight />
                </a>
                <a
                  href={item.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 items-center gap-2 rounded-full border border-white/20 bg-transparent px-4 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  GitHub
                  <FaGithub />
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;
