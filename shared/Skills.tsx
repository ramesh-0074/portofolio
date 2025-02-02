"use client";
import { excitingSkills, skills, upComingSkills } from "@/lib/skills";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { gsap } from "gsap";

type Props = {};

export default function Skills({}: Props) {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const skillsRef = useRef<HTMLUListElement>(null);
  const upComingSkillsRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (inView && skillsRef.current) {
      const skillItems = skillsRef.current.children;

      gsap.fromTo(
        skillItems,
        {
          opacity: 0,
          y: 50,
          scale: 0.6,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: "expo.inOut",
        }
      );

      // Hover animation
      Array.from(skillItems).forEach((item) => {
        const listItem = item as HTMLLIElement;

        listItem.addEventListener("mouseenter", () => {
          gsap.to(listItem, {
            scale: 1.05,
            boxShadow: "0 10px 15px rgba(0,0,0,0.1)",
            duration: 0.3,
            ease: "power1.out",
          });
        });

        listItem.addEventListener("mouseleave", () => {
          gsap.to(listItem, {
            scale: 1,
            boxShadow: "none",
            duration: 1,
            ease: "easeInOut",
          });
        });
      });
    }
  }, [inView]);

  useEffect(() => {
    if (inView && upComingSkillsRef.current) {
      const skillItems = upComingSkillsRef.current.children;

      gsap.fromTo(
        skillItems,
        {
          opacity: 0,
          y: 50,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: "expo.inOut",
        }
      );

      // Hover animation
      Array.from(skillItems).forEach((item) => {
        const listItem = item as HTMLLIElement;
      
        // Create hover animation timeline
        const hoverTimeline = gsap.timeline({ paused: true });
      
        hoverTimeline
          .to(listItem, {
            scale: 1.05,
            boxShadow: "0 15px 20px rgba(0,0,0,0.1)",
            duration: 0.3,
            ease: "elastic.out(1, 0.3)"
          })
          .to(listItem.querySelector('span'), {
            y: -5,
            duration: 0.2,
            ease: "easeInOut"
          }, 0);
      
        // Reverse timeline for mouse leave
        const leaveTimeline = gsap.timeline({ paused: true });
        
        leaveTimeline
          .to(listItem, {
            scale: 1,
            boxShadow: "none",
            duration: 0.3,
            ease: "power2.out"
          })
          .to(listItem.querySelector('span'), {
            y: 0,
            duration: 0.2,
            ease: "power1.out"
          }, 0);
      
        // Add event listeners
        listItem.addEventListener("mouseenter", () => {
          hoverTimeline.restart();
        });
      
        listItem.addEventListener("mouseleave", () => {
          leaveTimeline.restart();
        });
      });
    }
  }, [inView]);

  return (
    <section
      id="skills"
      className="container mx-auto w-full h-auto min-h-[700px] pt-8 px-2"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -30 }}
        transition={{ duration: 1.5, ease: "circIn" }}
        className="text-center text-[#1c2e4a] dark:text-[#C1E8FF] text-2xl underline pb-6 md:text-4xl font-bold"
      >
        What I am good at
      </motion.div>
      <ul
        ref={skillsRef}
        className="flex flex-wrap items-center py-4 justify-center text-sm md:text-base font-semibold md:font-bold"
      >
        {skills.map((skill, index) => (
          <motion.li
            key={index}
            className={`group relative mx-2 my-2 px-4 py-2 rounded-3xl text-center  overflow-hidden border-2 border-[#5483B3] dark:border-[#7da0ca] ${skill.highlight ? 'dark:text-white': 'dark:text-[#5483B3] text-[#5483B3]'} ${
              skill.highlight
                ? `before:ease relative px-4 py-2 rounded-3xl overflow-hidden border border-[#5483B3] dark:border-[#7da0ca] bg-[#5483B3] dark:bg-[#7da0ca]  shadow-2xl transition-all
                before:absolute before:right-0 before:top-0 before:w-6 before:translate-x-12
                before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-[#5483B3] dark:hover:shadow-[#7da0ca]  hover:before:-translate-x-40`
                : ""
            }`}
          >
            <div
              className={`absolute inset-0 w-0 bg-[#5483B3] dark:bg-[#7da0ca] transition-all duration-[250ms] ease-out group-hover:w-full`}
            ></div>
            <span className="relative z-10 group-hover:text-white">
              {skill.name}
            </span>
          </motion.li>
        ))}
      </ul>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -30 }}
        transition={{ duration: 1.5, ease: "circIn" }}
        className="text-center text-[#1c2e4a] dark:text-[#C1E8FF] text-2xl underline pb-5 md:text-4xl font-bold"
      >
        Things that I am working on
      </motion.div>
      <ul ref={upComingSkillsRef} className="flex my-3 md:my-7 flex-wrap items-center justify-center text-sm md:text-base font-semibold md:font-bold">
        {upComingSkills.map((skill, index) => (
          <motion.li
            key={index}
            className={`group relative mx-2 my-2 px-4 py-2 rounded-3xl text-center  overflow-hidden border-2 border-[#5483B3] dark:border-[#7da0ca] ${skill.highlight ? 'dark:text-white': 'dark:text-[#5483B3] text-[#5483B3]'} ${
              skill.highlight
                ? `before:ease relative px-4 py-2 rounded-3xl overflow-hidden border border-[#5483B3] dark:border-[#7da0ca] bg-[#5483B3] dark:bg-[#7da0ca]  shadow-2xl transition-all
                before:absolute before:right-0 before:top-0 before:w-6 before:translate-x-12
                before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-[#5483B3] dark:hover:shadow-[#7da0ca]  hover:before:-translate-x-40`
                : ""
            }`}
          >
              <div
              className={`absolute inset-0 w-0 bg-[#5483B3] dark:bg-[#7da0ca] transition-all duration-[250ms] ease-out group-hover:w-full`}
            ></div>
            <span className="relative z-10 group-hover:text-white">
              {skill.name}
            </span>
          </motion.li>
        ))}
      </ul>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -30 }}
        transition={{ duration: 1.5, ease: "circIn" }}
        className="text-center text-[#1c2e4a] dark:text-[#C1E8FF] text-2xl underline pb-5 md:text-4xl font-bold"
      >
        Things that I am excited about
      </motion.div>
      <ul ref={upComingSkillsRef} className="flex flex-wrap items-center justify-center text-sm md:text-base font-semibold md:font-bold">
        {excitingSkills.map((skill, index) => (
          <motion.li
            key={index}
            className={`group relative mx-2 my-2 px-4 py-2 rounded-3xl text-center  overflow-hidden border-2 border-[#5483B3] dark:border-[#7da0ca] ${skill.highlight ? 'dark:text-white': 'dark:text-[#5483B3] text-[#5483B3]'} ${
              skill.highlight
                ? `before:ease relative px-4 py-2 rounded-3xl overflow-hidden border border-[#5483B3] dark:border-[#7da0ca] bg-[#5483B3] dark:bg-[#7da0ca]  shadow-2xl transition-all
                before:absolute before:right-0 before:top-0 before:w-6 before:translate-x-12
                before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-[#5483B3] dark:hover:shadow-[#7da0ca]  hover:before:-translate-x-40`
                : ""
            }`}
          >
              <div
              className={`absolute inset-0 w-0 bg-[#5483B3] dark:bg-[#7da0ca] transition-all duration-[250ms] ease-out group-hover:w-full`}
            ></div>
            <span className="relative z-10 group-hover:text-white">
              {skill.name}
            </span>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
