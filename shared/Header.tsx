"use client";
import React, { useState } from "react";
import DarkMode from "./DarkMode";
import { motion } from "framer-motion";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaUser,
  FaBriefcase,
  FaCode,
  FaProjectDiagram,
  FaEnvelope,
} from "react-icons/fa";
import { useParser } from "../lib/userAgent";

type Props = {
  userAgent?: string;
};

export default function Header({ userAgent = "" }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const isMobile = useParser(userAgent);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const smoothScrollTo = (target: string) => {
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActive(target);
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 5 }}
      className="fixed left-4 top-4 md:left-1/2 z-50 md:-translate-x-1/2 flex flex-col md:flex-row items-center justify-center gap-8"
    >
      {isMobile && (
        <button
          onClick={toggleMenu}
          className="text-black dark:text-white text-2xl z-50 p-2 md:p-3 rounded-full shadow-2xl md:hidden transition-all duration-300 bg-[#58A6FF] "
        >
          {isMenuOpen ? (
            <FaTimes className="w-5 h-5 md:w-7 md:h-7" />
          ) : (
            <FaBars className="w-5 h-5 md:w-7 md:h-7" />
          )}
        </button>
      )}

      <motion.ul
        initial={{ height: isMobile ? 0 : "auto", opacity: isMobile ? 0 : 1 }}
        animate={
          isMenuOpen || !isMobile
            ? { height: "auto", opacity: 1 }
            : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.5 }}
        className={`flex ${
          isMobile
            ? "flex-col absolute top-14 -left-1 right-4 overflow-hidden"
            : "flex-row"
        } items-center gap-6 rounded-3xl bg-[#052659] dark:bg-[#5483B3] text-white shadow-2xl mt-2 p-6 md:p-4 z-50`}
      >
        {[
          { id: "home", icon: FaHome, label: "Home" },
          { id: "about", icon: FaUser, label: "About" },
          { id: "experience", icon: FaBriefcase, label: "Experience" },
          { id: "skills", icon: FaCode, label: "Skills" },
          { id: "projects", icon: FaProjectDiagram, label: "Projects" },
          { id: "contact", icon: FaEnvelope, label: "Contact" },
        ].map(({ id, icon: Icon, label }) => (
          <li
            key={id}
            className={`font-bold cursor-pointer transition-all duration-300 p-2 ${
              active === id ? "bg-[#58A6FF] dark:bg-[#052659] rounded-full md:rounded-3xl text-black dark:text-white" : ""
            }`}
            onClick={() => smoothScrollTo(id)}
          >
            {isMobile ? <Icon className="w-5 h-5 md:w-7 md:h-7" /> : label}
          </li>
        ))}
      </motion.ul>

      <DarkMode />
    </motion.header>
  );
}
