"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CurtainDropAnimation() {
  const [isVisible, setIsVisible] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const curtainVariants = {
    initial: { height: "100%" },
    animate: { height: 0 },
    exit: { height: 0 }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial="initial"
          animate="animate"
          exit="exit"
          variants={curtainVariants}
          transition={{ 
            duration: 1, 
            ease: "easeInOut",
            delay: 0.5
          }}
          className="fixed inset-0 z-[9999] dark:bg-[#7DA0CA] bg-[#052659] flex items-center justify-center"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.5, delay: 0 }}
            className="text-white text-4xl font-bold"
          >
            Welcome
          </motion.h2>
        </motion.div>
      )}
    </AnimatePresence>
  );
}