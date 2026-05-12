import { Github, ArrowUpRight } from 'lucide-react';
import { projects } from '../data/projects';

export default function ProjectsPage() {
  return (
    <section aria-labelledby="projects-heading" className="py-28 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">

        {/* Section header */}
        <div className="mb-16 animate-slideDown">
          <p className="text-xs font-semibold tracking-widest text-blue-600 dark:text-blue-400 uppercase mb-3">
            Selected Work
          </p>
          <h2
            id="projects-heading"
            className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white"
          >
            Projects
          </h2>
          <p className="mt-3 text-slate-500 dark:text-slate-400 max-w-md">
            A collection of recent projects, experiments, and things I've shipped.
          </p>
        </div>

        {/* Project grid */}
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" aria-label="Projects">
          {projects.map((project, index) => (
            <li
              key={index}
              className="group relative flex flex-col bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 hover:border-blue-300 dark:hover:border-blue-800 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-slate-200/60 dark:hover:shadow-slate-950/60 transition-all duration-300 animate-slideUp"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4" aria-label="Technologies used">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 border border-blue-100 dark:border-blue-900/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3 className="text-base font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 mb-2">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed flex-1">
                {project.description}
              </p>

              {/* Footer */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} source code on GitHub (opens in new tab)`}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-150 group/link"
                >
                  <Github size={14} aria-hidden="true" />
                  View on GitHub
                  <ArrowUpRight
                    size={13}
                    aria-hidden="true"
                    className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-150"
                  />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
