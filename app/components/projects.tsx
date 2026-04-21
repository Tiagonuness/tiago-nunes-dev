import type React from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { Button } from "~/components/ui/button";
import { projects, type ProjectI } from "~/constants/projects";

const ProjectCard: React.FC<{ project: ProjectI }> = ({ project }) => {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_20px_80px_rgba(15,23,42,0.35)] backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-white/[0.07]">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
        <img
          src={project.imageUrl || "/placeholder.svg"}
          alt={project.title}
          className="h-52 w-full object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <span className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
          Projeto em destaque
        </span>
        <h3 className="mt-3 text-2xl font-semibold text-white">
          {project.title} - {project.enterprise}
        </h3>
        {project.department && (
          <p className="mt-2 text-sm leading-6 text-slate-300">{project.department}</p>
        )}
        <p className="mt-3 text-sm leading-6 text-slate-300">{project.context}</p>
        <p className="mt-4 text-sm leading-7 text-slate-400">{project.description}</p>

        <div className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">Entregas e impacto</p>
          <div className="mt-3 space-y-3">
            {project.highlights.map((highlight) => (
              <div key={highlight} className="flex items-start gap-3 text-sm text-slate-300">
                <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <span
                key={skill.name}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/70 px-3 py-1.5 text-xs font-medium text-slate-200"
              >
                <Icon className="h-3.5 w-3.5 text-cyan-300" />
                {skill.name}
              </span>
            );
          })}
        </div>

        {(project.liveUrl || project.repoUrl) && (
          <div className="mt-8 flex flex-wrap gap-3">
            {project.liveUrl && (
              <Button
                size="lg"
                variant="outline"
                className="border-cyan-300/30 bg-cyan-300/10 text-white hover:bg-cyan-300/20"
                asChild
              >
                <a href={project.liveUrl} rel="noopener noreferrer" target="_blank">
                  Acessar projeto
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            )}
            {project.repoUrl && (
              <Button
                size="lg"
                variant="outline"
                className="border-white/15 bg-white/5 text-white hover:bg-white/10"
                asChild
              >
                <a href={project.repoUrl} rel="noopener noreferrer" target="_blank">
                  Repositório
                  <Github className="ml-2 h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
        )}
      </div>
    </article>
  );
};

export const Projects: React.FC = () => {
  return (
    <section className="w-full py-6">
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
