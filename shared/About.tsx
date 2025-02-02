"use client";
import React from "react";
import {
  motion,
  Variants,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  animate,
} from "framer-motion";

type Props = {};

const baseText = `I am a MERN Stack developer specialized in
        Front-end development with expertise spanning a wide
        range of technologies and best practices in the eCommerce domain. I
        excel at collaborating with cross-functional teams to ensure seamless
        integration of front-end and back-end systems while maintaining high
        standards of code quality and performance. My passion lies in leveraging
        technology to solve complex challenges and deliver value to businesses
        and their customers. Lets connect to explore how we can work
        together to build innovative and cutting-edge eCommerce solutions. I am
        skilled in React/Nextjs, Nodejs, Tailwind, and
        TypeScript.`;
const baseText2 = `Apart from these I am a big time video gamer, Reader and a gym rat who
        likes to listen to music and watch movies.`;

const textVariants: Variants = {
  blinking: {
    opacity: [0, 1],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatDelay: 0.5,
      ease: "easeInOut",
      times: [0, 0.5, 0.5, 1],
    },
  },
};
export default function About({}: Props) {
  const { scrollYProgress } = useScroll();
  const count = useMotionValue(0);
  const [showSecondText, setShowSecondText] = React.useState(false);
  const colorSpring = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  const animatedColor = useTransform(
    colorSpring,
    [0, 0.5, 1],
    ["#FF9A8B", "#FFC3A0", "#FF99AC"]
  );

  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.slice(0, latest)
  );
  const rounded2 = useTransform(count, (latest) => Math.round(latest));
  const displayText2 = useTransform(rounded2, (latest) =>
    baseText2.slice(0, latest)
  );

  React.useEffect(() => {
    const controls = animate(count, baseText.length, {
      type: "tween",
      duration: 25,
      ease: "easeInOut",
      onComplete: () => {
        setShowSecondText(true);
        const controls2 = animate(count, baseText2.length, {
          type: "tween",
          duration: 10,
          ease: "easeInOut",
        });
        return controls2.stop();
      },
    });
    return controls.stop;
  }, []);

  return (
    <section
      id="about"
      className="container mx-auto w-full h-auto min-h-[600px] pt-6 flex flex-col items-center justify-start"
    >
      <motion.div
        variants={textVariants}
        animate="blinking"
        className="flex items-center justify-center text-[#1c2e4a] dark:text-[#C1E8FF] text-2xl underline pb-2 md:text-5xl font-bold"
       
      >
        About Me
      </motion.div>
      <motion.span className="max-w-[850px] px-2 text-center text-base text-[#052659] dark:text-[#C1E8FF] font-bold pt-4 md:text-xl">
        {displayText}
      </motion.span>
      {showSecondText && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-[850px] px-2 text-center text-base font-bold pt-4 md:text-xl"
          style={{
            color: animatedColor,
          }}
        >
          {displayText2}
        </motion.div>
      )}
    </section>
  );
}
