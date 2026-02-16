"use client";

import { impactStats, skillGroups } from "@/data";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";

const SkillHighlights = () => {
  return (
    <section id="skills" className="py-20">
      <h1 className="heading text-5xl">
        Impact-driven <span className="text-purple">engineering profile</span>
      </h1>

      <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
        {impactStats.map((stat, index) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.35, delay: index * 0.08 }}
            className="rounded-2xl border border-white/10 bg-black-200 p-5 text-center"
          >
            <p className="text-2xl md:text-3xl font-bold text-purple">{stat.value}</p>
            <p className="text-sm md:text-base text-white-100 mt-2">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
        {skillGroups.map((group, index) => (
          <motion.article
            key={group.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -4 }}
            className="rounded-2xl border border-white/10 bg-black-200 p-6"
          >
            <h3 className="text-xl font-semibold text-white">{group.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/20 bg-black-100 px-3 py-1 text-xs md:text-sm text-blue-100"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black-200 px-6 py-3 text-sm md:text-base font-medium text-white"
        >
          Let&apos;s build something meaningful
          <FaArrowRight />
        </motion.a>
      </div>
    </section>
  );
};

export default SkillHighlights;
