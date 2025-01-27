"use client";
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { useParser } from "@/lib/userAgent";

type Props = {
  title: string;
  index: number;
  url: string;
  description: string;
  thumbnail: any;
  stack: string[];
};

function Card({ title, index, url, description, thumbnail, stack }: Props) {
  const cardRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);
  let isMobile = false;
  if (window != undefined) {
    const userAgent = window?.navigator.userAgent;
    isMobile = useParser(userAgent);
  }

  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    if (isMobile) return; // Skip animation for mobile devices

    const card = cardRef.current;
    const title = titleRef.current;
    const description = descriptionRef.current;
    const stack = stackRef.current;

    if (!card || !title || !description || !stack) return;

    // GSAP Hover Animation
    const tl = gsap.timeline({ paused: true });
    tl.to(card, { scale: 0.95, duration: 0.3, ease: "power2.out" })
      .to(title, { y: -10, duration: 0.3, ease: "power2.out" }, "<")
      .to(description, { opacity: 1, duration: 0.3, ease: "power2.out" }, "<")
      .to(stack, { opacity: 1, duration: 0.3, ease: "power2.out" }, "<");

    card.addEventListener("mouseenter", () => tl.play());
    card.addEventListener("mouseleave", () => tl.reverse());

    return () => {
      card.removeEventListener("mouseenter", () => tl.play());
      card.removeEventListener("mouseleave", () => tl.reverse());
    };
  }, [isMobile]);

  const handleFlip = () => {
    if (isMobile) setIsFlipped((prev) => !prev);
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative w-full rounded-2xl md:w-[45vw] h-fit flex flex-col items-center justify-center border border-gray-300 px-3 py-4 my-5 shadow-md ${
        index % 2 === 0
          ? "bg-gradient-to-t from-[#052659] to-[#5483B3] dark:from-[#C1E8FF] dark:to-[#5483B3] self-start"
          : "bg-gradient-to-t dark:from-[#E5F2FA] dark:to-[#8DB4D3] from-[#1b4f83] to-[#8DB4D3] self-end"
      }`}
      initial={{
        opacity: 0,
        x: !isMobile ? (index % 2 === 0 ? -50 : 80) : 0,
        scale: isMobile ? 0.8 : 1,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        scale: 1,
        transition: {
          duration: 1,
        },
      }}
      viewport={{ once: true }}
      onClick={handleFlip}
    >
      {isMobile ? (
        <AnimatePresence mode="wait">
          {!isFlipped ? (
            <motion.div
              key="front"
              initial={{ rotateY: 0 }}
              animate={{ rotateY: 0 }}
              exit={{ rotateY: 90 }}
              transition={{ duration: 0.5 }}
              className=" inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-[#1b4f83] to-[#8DB4D3] p-4 rounded-2xl"
            >
              <Image
                src={thumbnail}
                alt={title}
                width={500}
                height={500}
                className="w-full h-52 object-cover rounded-t-2xl"
              />
              <h3 className="text-2xl font-bold text-[#C1E8FF] dark:text-[#1c2e4a] mt-4">
                {title}
              </h3>
            </motion.div>
          ) : (
            <motion.div
              key="back"
              initial={{ rotateY: -90 }}
              animate={{ rotateY: 0 }}
              exit={{ rotateY: 90 }}
              transition={{ duration: 0.5 }}
              className="min-h-[200px] inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-[#052659] to-[#5483B3] p-4 rounded-2xl"
            >
              <p className="text-[#C1E8FF] dark:text-[#1c2e4a] text-center mt-2">
                {description}
              </p>
              <div className="flex flex-wrap justify-center gap-2 mt-3">
                {stack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-sm hover:bg-[#5196CE] rounded-xl shadow-xl hover:scale-105 transition-all duration-300 dark:hover:bg-[#262F45] text-white bg-[#052659] dark:bg-[#1B4F83]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <Link
                target="_blank"
                href={url}
                rel="noopener noreferrer"
                className="text-[#C1E8FF] dark:text-[#1c2e4a] flex items-center gap-1 mt-3 font-semibold text-sm hover:underline"
              >
                <span>View Project</span> <FaArrowRight className="w-3 h-3" />
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      ) : (
        <>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-full"
            href={url}
          >
            <div className="w-full h-52">
              <Image
                src={thumbnail}
                alt={title}
                width={500}
                height={500}
                className="w-full h-52 object-cover rounded-t-2xl"
              />
            </div>
          </Link>
          <h3
            ref={titleRef}
            className="text-2xl font-bold text-[#C1E8FF] dark:text-[#1c2e4a] mt-4 transition-transform"
          >
            {title}
          </h3>
          <p
            ref={descriptionRef}
            className="text-[#C1E8FF] dark:text-[#1c2e4a] text-center mt-2 opacity-0"
          >
            {description}
          </p>
          <div
            ref={stackRef}
            className="flex flex-wrap justify-center gap-2 mt-3 opacity-0"
          >
            {stack.map((tech, i) => (
              <span
                key={i}
                className="px-2 py-1 text-sm hover:bg-[#5196CE] rounded-xl shadow-xl hover:scale-105 transition-all duration-300 dark:hover:bg-[#262F45] text-white bg-[#052659] dark:bg-[#1B4F83]"
              >
                {tech}
              </span>
            ))}
          </div>
          <Link
            target="_blank"
            href={url}
            rel="noopener noreferrer"
            className=" text-[#C1E8FF] dark:text-[#1c2e4a] flex items-center mt-3 gap-1 font-semibold text-sm hover:underline"
          >
            <span>View Project</span> <FaArrowRight className="w-3 h-3" />
          </Link>
        </>
      )}
    </motion.div>
  );
}

export default Card;
