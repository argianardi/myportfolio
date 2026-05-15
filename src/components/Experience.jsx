import { experiences } from '../data/experiences.js';
import { FiCalendar, FiBriefcase, FiExternalLink, FiCheckCircle } from 'react-icons/fi';

// Group experiences by company, preserving order of first appearance
const groupByCompany = (data) => {
  const map = new Map();
  data.forEach((exp) => {
    if (!map.has(exp.company)) {
      map.set(exp.company, {
        company: exp.company,
        companyUrl: exp.companyUrl,
        roles: [],
      });
    }
    map.get(exp.company).roles.push(exp);
  });
  return Array.from(map.values());
};

const Experience = () => {
  const groups = groupByCompany(experiences);

  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="container mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div data-aos="fade-up" className="mb-14">
          <div className="flex items-center gap-4 mb-4">
            <h2 className="section-heading whitespace-nowrap mb-0">
              <span className="font-mono text-accent text-xl mr-2">01.</span>
              Experience
            </h2>
            <div className="accent-line flex-grow max-w-[300px] hidden sm:block"></div>
          </div>
          <p className="section-subheading">// where I&apos;ve worked</p>
        </div>

        {/* Stepper Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-6 top-2 bottom-2 w-[2px] bg-gradient-to-b from-accent via-accent/30 to-transparent hidden sm:block" />

          <div className="space-y-14">
            {groups.map((group, gIdx) => (
              <div
                key={group.company}
                className="relative sm:pl-16 md:pl-20"
                data-aos="fade-up"
                data-aos-delay={gIdx * 100}
              >
                {/* Stepper dot */}
                <div className="absolute left-0 md:left-[9px] top-1 hidden sm:flex items-center justify-center">
                  <span className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-navy-900 border-2 border-accent flex items-center justify-center shadow-lg shadow-accent/30">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                  </span>
                </div>

                {/* Company Header */}
                <div className="mb-6">
                  <a
                    href={group.companyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-lg md:text-xl font-bold text-slate-light hover:text-accent transition-colors duration-200 group"
                  >
                    {group.company}
                    <FiExternalLink size={15} className="opacity-60 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>

                {/* Roles within this company */}
                <div className="space-y-8">
                  {group.roles.map((role, rIdx) => (
                    <div
                      key={rIdx}
                      className={`relative pl-4 border-l-2 ${
                        rIdx === 0 ? 'border-accent/50' : 'border-slate/20'
                      }`}
                    >
                      {/* Role Header */}
                      <div className="mb-3">
                        <h3 className="text-base md:text-lg font-semibold text-accent">
                          {role.role}
                        </h3>
                        <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1 text-slate text-xs font-mono">
                          <span className="flex items-center gap-1.5">
                            <FiCalendar size={11} className="text-accent/70" />
                            {role.period}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <FiBriefcase size={11} className="text-accent/70" />
                            {role.type}
                          </span>
                        </div>
                      </div>

                      {/* Description bullets */}
                      <ul className="space-y-2 mb-4">
                        {role.description.map((point, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2.5 text-slate text-sm leading-relaxed"
                          >
                            <FiCheckCircle
                              size={14}
                              className="text-accent mt-0.5 shrink-0"
                            />
                            {point.trim()}
                          </li>
                        ))}
                      </ul>

                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-2">
                        {role.tech.map((tech) => (
                          <span
                            key={tech}
                            className="font-mono text-[10px] sm:text-xs text-accent bg-accent/10 px-2.5 py-1 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
