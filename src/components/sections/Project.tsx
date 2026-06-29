import { ExternalLink } from "lucide-react";
import { PROJECTS } from "../../data";

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
            Projects
          </h2>
          <div className="w-20 h-1 bg-sky-500 mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="border border-slate-700 rounded-lg overflow-hidden"
            >
              <img
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-6">
                <div className="text-sm text-sky-400 mb-2">
                  {project.category}
                </div>

                <h3 className="text-xl font-semibold text-slate-100 mb-2">
                  {project.title}
                </h3>

                <p className="text-slate-300 mb-4">
                  {project.shortDesc}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 border border-slate-700 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-sky-400"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>

                  <a
                    href={project.github}
                    className="text-slate-300"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}