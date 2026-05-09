import { projects } from '../data/projects.js';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 md:py-32">
      <div className="container mx-auto max-w-6xl px-6">
        <div data-aos="fade-up">
          <div className="flex items-center gap-4 mb-4">
            <h2 className="section-heading whitespace-nowrap">
              <span className="font-mono text-accent text-xl mr-2">03.</span>
              Projects
            </h2>
            <div className="accent-line flex-grow max-w-[300px] hidden sm:block"></div>
          </div>
          <p className="section-subheading">// things I&apos;ve built</p>
        </div>

        {/* Featured Projects (with images) */}
        <div className="space-y-20 mb-16">
          {projects
            .filter((p) => p.image)
            .map((project, idx) => (
              <div
                key={project.name}
                className={`relative grid md:grid-cols-12 gap-4 items-center ${
                  idx % 2 === 0 ? '' : 'md:text-right'
                }`}
                data-aos="fade-up"
              >
                {/* Image */}
                <div
                  className={`md:col-span-7 ${idx % 2 === 0 ? 'md:col-start-1' : 'md:col-start-6'} row-start-1`}
                >
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="block relative group"
                  >
                    <div className="absolute inset-0 bg-accent/20 group-hover:bg-transparent transition-all duration-300 rounded-lg z-10"></div>
                    <img
                      src={project.image}
                      alt={project.name}
                      className="rounded-lg w-full object-cover aspect-video"
                    />
                  </a>
                </div>

                {/* Content */}
                <div
                  className={`md:col-span-6 ${idx % 2 === 0 ? 'md:col-start-7' : 'md:col-start-1'} row-start-1 relative z-20`}
                >
                  <p className="font-mono text-accent text-xs mb-2">
                    Featured Project
                  </p>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-light mb-4">
                    {project.name}
                  </h3>
                  <div className="glass-card !p-5 mb-4">
                    <p className="text-slate text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div
                    className={`flex flex-wrap mb-4 font-mono text-xs text-slate ${idx % 2 !== 0 ? 'md:justify-end' : ''}`}
                  >
                    {project.tech.map((tech, index) => (
                      <>
                        <span key={tech}>{tech}</span>
                        {index < project?.tech?.length - 1 && (
                          <span>,&nbsp;</span>
                        )}
                      </>
                    ))}
                  </div>
                  <div
                    className={`flex gap-4 ${idx % 2 !== 0 ? 'md:justify-end' : ''}`}
                  >
                    {project.sourceCode && (
                      <a
                        href={project.sourceCode}
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-light hover:text-accent transition-colors"
                      >
                        <FiGithub size={20} />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-light hover:text-accent transition-colors"
                      >
                        <FiExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Other Projects Grid */}
        <h3
          className="text-center font-bold text-xl text-slate-light mb-8"
          data-aos="fade-up"
        >
          Other Noteworthy Projects
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects
            .filter((p) => !p.image)
            .map((project) => (
              <div
                key={project.name}
                className="glass-card group hover:-translate-y-2 transition-all duration-300"
                data-aos="fade-up"
              >
                {/* Card Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="text-accent text-3xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </div>
                  <div className="flex gap-3">
                    {project.sourceCode && (
                      <a
                        href={project.sourceCode}
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate hover:text-accent transition-colors"
                      >
                        <FiGithub size={18} />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate hover:text-accent transition-colors"
                      >
                        <FiExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Card Body */}
                <h4 className="text-lg font-bold text-slate-light mb-2 group-hover:text-accent transition-colors">
                  {project.name}
                </h4>
                <p className="text-slate text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, index) => (
                    <div className="font-mono text-xs text-slate-dark">
                      <span key={tech}>{tech}</span>
                      {index < project?.tech?.length - 1 && <span>,</span>}
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
