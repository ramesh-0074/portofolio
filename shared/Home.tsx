"use client";
import Image from "next/image";
import React from "react";
import topImage from "../public/topImage.jpeg";
import me from "../public/me.jpeg";
import { motion } from "framer-motion";
import Link from "next/link";
type Props = {};

export default function Home({}: Props) {
  // const isDarkMode = localStorage.getItem("mode") === "dark";
  return (
    <section
      id="home"
      className="container mx-auto w-full h-auto min-h-[600px] md:h-screen flex justify-center items-center flex-col"
    >
      <motion.div
        className="w-72 h-72 md:w-96 md:h-96 overflow-hidden rounded-full mb-2 shadow-md relative"
        animate={{
          backgroundImage: [
            "linear-gradient(135deg, #58A6FF, #052659, #5483B3)",
            "linear-gradient(135deg, #052659, #5483B3, #58A6FF)",
            "linear-gradient(135deg, #58A6FF, #5483B3, #052659)",
          ],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <motion.div
          className="w-72 h-72 md:w-96 md:h-96 overflow-hidden rounded-full mb-2 shadow-md relative"
          animate={{
            backgroundImage: [
              "linear-gradient(135deg, #58A6FF, #052659, #5483B3)",
              "linear-gradient(135deg, #052659, #5483B3, #58A6FF)",
              "linear-gradient(135deg, #58A6FF, #5483B3, #052659)",
            ],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <Image
            src={me}
            alt="home"
            className="object-cover select-none w-full h-full rounded-full hover:p-2 trasition-all duration-400"
            width={1000}
            height={1000}
          />
        </motion.div>
      </motion.div>

      <motion.h2
        className="text-2xl font-bold md:text-4xl text-[#1c2e4a] dark:text-[#C1E8FF]"
        initial={{ opacity: 0, x: -70, scale: 0.95 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        Hello, My name is Ramesh P R
      </motion.h2>
      <motion.h1
        className="text-lg md:text-xl font-semibold text-[#052659] dark:text-[#C1E8FF] py-2"
        initial={{ opacity: 0, x: 70, scale: 0.95 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        I am a Full Stack Developer
      </motion.h1>
      <ul className="flex items-center justify-center gap-5 w-full text-lg font-bold">
        <a href={"/Ramesh_P_R.pdf"} download={"Ramesh_Resume.pdf"}>
        <li
          className="relative px-4 py-2 rounded-3xl overflow-hidden border border-black text-black dark:border-white dark:text-white shadow-2xl 
        transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm
         before:bg-black dark:before:bg-white before:duration-300 before:ease-out hover:text-white dark:hover:text-black  hover:shadow-black dark:hover:shadow-white  hover:before:h-40 hover:before:w-40 hover:before:opacity-80"
        >
          <span className="relative z-10">Resume</span>
        </li></a>
        <button
          className="before:ease relative px-4 py-2 rounded-3xl overflow-hidden border border-green-500 dark:border-violet-500 bg-green-500 dark:bg-violet-500 text-white shadow-2xl transition-all 
        before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 
        before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-green-500 dark:hover:shadow-violet-500  hover:before:-translate-x-40"
        >
          <Link href="#contact" className="relative z-10">
            Contact
          </Link>
        </button>
      </ul>
    </section>
  );
}
