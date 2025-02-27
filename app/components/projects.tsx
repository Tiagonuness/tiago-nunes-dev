import type React from "react";
import { projects, ProjectI } from "../constants/projects";
import { useState } from 'react';
import { Button } from "~/components/ui/button";
import { LaptopMinimal, Github } from 'lucide-react';

const ProjectCard: React.FC<{ project: ProjectI }> = ({ project }) => {
  const [hoveredSkillIndex, setHoveredSkillIndex] = useState<number | null>(null);
  return (
    <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2">
      <img
        src={project.imageUrl || "/placeholder.svg"}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">
          {project.title}
        </h3>
        <p className="text-gray-400 mb-4">{project.description}</p>

        <div className="flex gap-2">
          {project.skills.map((skill, index) => (
            <div
              key={index}
              className="relative inline-block"
              onMouseEnter={() => setHoveredSkillIndex(index)}
              onMouseLeave={() => setHoveredSkillIndex(null)}
            >
              <skill.icon className="cursor-pointer mb-" />
              {hoveredSkillIndex === index && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-sm text-white bg-black rounded-md whitespace-nowrap">
                  <p>{skill.name}</p>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-black" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex gap-4 mt-4">
          {project.liveUrl && (
            <Button size="lg" variant="outline" className="group transition-all duration-300 hover:scale-105" asChild>
              <a href={project.liveUrl} rel="noopener noreferrer" target="_blank">
                Site
                <LaptopMinimal className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
          )}
          {project.repoUrl && (
            <Button size="lg" variant="outline" className="group transition-all duration-300 hover:scale-105" asChild>
              <a href={project.repoUrl} rel="noopener noreferrer" target="_blank">
                GitHub Repositório
                <Github className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export const Projects: React.FC = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
