import Link from "next/link";
import React from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

type Props = {
  userAgent?: string;
};

export default function Footer({ userAgent = "" }: Props) {
  return (
    <footer className="container mx-auto shadow-2xl z-50 flex flex-col px-0 md:px-6  bg-[#052659] dark:bg-[#5483B3]">
      <div className="hidden border-b border-black dark:border-white md:flex itenms-center gap-y-1 flex-col md:flex-row p-3">
        <div className="w-full md:w-1/2 mx-auto text-sm md:text-3xl font-normal md:font-semibold flex">
          Portfolio.
        </div>
        <ul className="w-full md:w-1/2 mx-auto text-base hidden md:flex items-center justify-end gap-12">
          <li className="relative group">
            <Link
              href="#home"
              className="relative inline-block transition-all duration-600"
            >
              Home
              <span className="absolute left-0 bottom-0 w-0 h-[2px] dark:bg-white bg-black transition-all duration-600 group-hover:w-full"></span>
            </Link>
          </li>
          <li className="relative group">
            <Link
              href={"#skills"}
              className="relative inline-block transition-all duration-600"
            >
              Skills
            </Link>
            <span className="absolute left-0 bottom-0 w-0 h-[2px] dark:bg-white bg-black transition-all duration-600 group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <Link
              className="relative inline-block transition-all duration-600"
              href={"#experience"}
            >
              Experience
            </Link>
            <span className="absolute left-0 bottom-0 w-0 h-[2px] dark:bg-white bg-black transition-all duration-600 group-hover:w-full"></span>
          </li>
          <li className="relative group">
            {" "}
            <Link
              className="relative inline-block transition-all duration-600"
              href={"#projects"}
            >
              Projects
            </Link>
            <span className="absolute left-0 bottom-0 w-0 h-[2px] dark:bg-white bg-black transition-all duration-600 group-hover:w-full"></span>
          </li>
          <li className="relative group">
            {" "}
            <Link
              className="relative inline-block transition-all duration-600"
              href={"#contact"}
            >
              Contact
            </Link>
            <span className="absolute left-0 bottom-0 w-0 h-[2px] dark:bg-white bg-black transition-all duration-600 group-hover:w-full"></span>
          </li>
        </ul>
      </div>
      <ul className="w-full fixed bottom-0 md:relative dark:bg-[#5483B3] bg-[#052659] text-white flex justify-center md:justify-end items-center p-3 gap-7 md:gap-5">
        <li>
          <Link href={"https://github.com/RAMESH189"}>
            <FaGithub className="text-3xl md:text-2xl" />
          </Link>
        </li>
        <li>
          <Link href={"https://www.instagram.com/_ramesh_rajendran_/"}>
            <FaInstagram className="text-3xl md:text-2xl" />
          </Link>
        </li>
        <li>
          <Link href={"https://www.linkedin.com/in/ramesh-pr/"}>
            <FaLinkedin className="text-3xl md:text-2xl" />
          </Link>
        </li>
        <li>
          <a href="tel:+917025107494">
            <FaWhatsapp className="text-3xl md:text-2xl" />
          </a>
        </li>
        <li>
          <Link href={"https://www.youtube.com/@kratospeare"}>
            <FaYoutube className="text-3xl md:text-2xl" />
          </Link>
        </li>
      </ul>
    </footer>
  );
}
