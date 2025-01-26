"use client";
import { experiences } from "@/lib/experience";
import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  React.useEffect(() => {
    gsap.fromTo(
      ".timeline-item",
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#experience",
          start: "top 100%",
          end: "bottom 70%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section
      id="experience"
      className="container mx-auto w-full min-h-[600px] px-4 py-8 flex flex-col items-center justify-center"
    >
      <h2 className="text-2xl text-[#1c2e4a] dark:text-[#C1E8FF] underline pb-4 md:text-4xl font-semibold">Experience</h2>
      <div className="timeline relative border-l-2 border-gray-300 pl-0">
        {experiences.map((item, index) => (
          <div
            key={index}
            className={`timeline-item dark:bg-white max-w-[600px] bg-gray-500 rounded-3xl mb-8 relative p-10 transition-all duration-500 ease-in-out`}
          >
            <div className="absolute right-4 top-7 md:-left-12 w-14 h-14  md:w-20 md:h-20  bg-blue-500 rounded-full">
              <Image
                src={item.logo}
                alt={item.company}
                width={100}
                height={100}
                className="object-contain w-full rounded-full p-1 md:p-2"
              />
            </div>
            <h3 className="dark:text-black text-white text-xl font-semibold">{item.role}</h3>
            <p className="dark:text-black text-white text-sm">
              {item.startDate} - {item.current ? "Present" : item.endDate}
            </p>
            <p className="font-medium text-white dark:text-black">{item.company}</p>
            <ul className="list-disc list-inside mt-2 dark:text-black text-white">
              {item.Responsibilities.map((responsibility, i) => (
                <li key={i}>{responsibility}</li>
              ))}
            </ul>
            <p className="mt-2 text-sm dark:text-black text-white">
              <strong>Skills Acquired:</strong> {item.skillsAquired.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
