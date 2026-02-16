"use client";
import React, { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
  useReducedMotion,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const shouldReduceMotion = useReducedMotion();

  const [visible, setVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("/");

  useEffect(() => {
    const sectionLinks = navItems
      .map((item) => item.link)
      .filter((link) => link.startsWith("#"));

    const updateActiveSection = () => {
      const midpoint = window.scrollY + window.innerHeight * 0.35;
      let current = "/";

      sectionLinks.forEach((link) => {
        const section = document.querySelector(link) as HTMLElement | null;
        if (!section) {
          return;
        }

        if (section.offsetTop <= midpoint) {
          current = link;
        }
      });

      setActiveSection(current);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    return () => window.removeEventListener("scroll", updateActiveSection);
  }, [navItems]);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-8 inset-x-0 mx-auto rounded-full border border-white/15 bg-black/80 shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-md z-[5000] pr-2 pl-6 py-2 items-center justify-center space-x-2 md:space-x-3",
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative items-center flex space-x-1 rounded-full px-3 py-1.5 text-sm transition-colors",
              activeSection === navItem.link
                ? "bg-white/12 text-white"
                : "text-white-100 hover:text-white"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block">{navItem.name}</span>
          </Link>
        ))}
        <a
          href="#contact"
          className="relative rounded-full border border-white/20 bg-white px-4 py-2 text-sm font-semibold text-black transition-colors hover:bg-white/90"
        >
          <span>Let&apos;s talk</span>
        </a>
      </motion.div>
    </AnimatePresence>
  );
};
