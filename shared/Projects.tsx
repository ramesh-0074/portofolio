import { projects } from "@/lib/projects";
import React from "react";
import Card from "./Card";

type Props = {};

export default function Projects({}: Props) {
  return (
    <section
      id="projects"
      className="relative container px-3 mx-auto w-full h-auto min-h-[600px] flex flex-col items-center justify-center"
    >
      {/* Vertical Line */}
      <div className="absolute hidden md:block left-1/2 top-12 h-full w-1 bg-gray-300 -z-10 transform -translate-x-1/2"></div>

      <h3 className="text-3xl md:text-4xl text-[#1c2e4a] dark:text-[#C1E8FF] font-bold underline mb-8">
        My Projects
      </h3>

      {projects.map((project, index) => (
        <Card
          key={index}
          title={project.title}
          index={index}
          url={project.url}
          description={project.description}
          thumbnail={project.thumbnail}
          stack={project.stack}
        />
      ))}
    </section>
  );
}
