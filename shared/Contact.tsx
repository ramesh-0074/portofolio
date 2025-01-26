"use client";
import React from "react";
import AnimatedCard from "./AnimatedCard";
import ContactForm from "./ContactForm";
type Props = {};

export default function Contact({}: Props) {
  return (
    <section
      id="contact"
      className="container mx-auto w-full h-auto min-h-[600px] pt-7 mt-10 flex flex-col lg:flex-row lg:px-20 pb-20 lg:pb-10"
    >
      <div className="flex-1 flex flex-col gap-3 mb-9">
        <h2 className="text-3xl md:text-6xl text-center text-[#1c2e4a] dark:text-[#C1E8FF] lg:text-left font-bold">
          Let&rsquo;s get In touch
        </h2>
        <p className="font-semibold text-xl text-[#1c2e4a] dark:text-[#C1E8FF] text-center lg:text-left">
          Collaborate, discuss, and make things happen.
        </p>
        <div className="flex items-center justify-center md:justify-start">
          <AnimatedCard />
        </div>
      </div>
      <ContactForm />
    </section>
  );
}
