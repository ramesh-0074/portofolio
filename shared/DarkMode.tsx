"use client";

import { Moon, Sun } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function DarkMode({}: Props) {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const ToggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("mode", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("mode", "dark");
      setIsDarkMode(true);
    }
  };

  React.useEffect(() => {
    const mode = localStorage.getItem("mode");
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  }, []);

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.2, rotate: 10 }}
      whileTap={{ scale: 0.9 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 15,
      }}
      className={`rounded-full p-2 md:p-3 cursor-pointer fixed md:relative right-4 top-4 md:right-0 md:top-0 shadow-2xl
        ${
          isDarkMode
            ? "bg-[#58A6FF] text-white"
            : "bg-[#faf328] text-black"
        }`}
      onClick={ToggleDarkMode}
    >
      {isDarkMode ? (
        <motion.div
          key="moon"
          initial={{ rotate: 180, scale: 0.8 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          <Moon className="w-5 h-5 md:w-7 md:h-7" />
        </motion.div>
      ) : (
        <motion.div
          key="sun"
          initial={{ rotate: -180, scale: 0.8 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          <Sun className="w-5 h-5 md:w-7 md:h-7" />
        </motion.div>
      )}
    </motion.div>
  );
}
