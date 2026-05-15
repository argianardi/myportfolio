import { projects } from '../data/projects.js';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 md:py-32">
      <div className="container mx-auto max-w-6xl px-6">
        <div data-aos="fade-up" className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <h2 className="section-heading whitespace-nowrap mb-0">
              <span className="font-mono text-accent text-xl mr-2">04.</span>
              Projects
            </h2>
            <div className="accent-line flex-grow max-w-[300px] hidden sm:block"></div>
          </div>
          <p className="section-subheading">// things I&apos;ve built</p>
        </div>

        {/* Unified Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={project.name}
              className="glass-card !p-0 overflow-hidden group hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-300 flex flex-col h-full border border-slate/10 hover:border-accent/30"
              data-aos="fade-up"
              data-aos-delay={(idx % 3) * 100}
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden bg-slate-800">
                <div className="absolute inset-0 bg-accent/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center group-hover:scale-110 transition-transform duration-700 ease-in-out bg-gradient-to-br from-slate-800 to-slate-900">
                    <span className="text-6xl font-mono font-bold text-slate-700 group-hover:text-accent/40 transition-colors duration-500">
                      {project.name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                )}
              </div>

              {/* Content Container */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4 gap-4">
                  <h3 className="text-xl font-bold text-slate-light group-hover:text-accent transition-colors duration-300 line-clamp-2">
                    {project.name}
                  </h3>
                  <div className="flex gap-3 text-slate flex-shrink-0 mt-1">
                    {project.sourceCode && (
                      <a
                        href={project.sourceCode}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-accent hover:scale-110 transition-all duration-200"
                        title="Source Code"
                      >
                        <FiGithub size={20} />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-accent hover:scale-110 transition-all duration-200"
                        title="Live Demo"
                      >
                        <FiExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-slate text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate/10">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[10px] sm:text-xs text-accent bg-accent/10 px-2.5 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
