import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaDatabase,
  FaReact,
  FaBootstrap,
  FaFigma,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiExpress,
  SiTailwindcss,
  SiVercel,
  SiGit,
  SiGithub,
  SiSequelize,
} from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: FaHtml5, repoDoc: "https://github.com/argianardi/" },
    { name: "CSS", icon: FaCss3Alt, repoDoc: "https://github.com/argianardi/" },
    {
      name: "JavaScript",
      icon: FaJsSquare,
      repoDoc: "https://github.com/argianardi/sinauJavaScript",
    },
    {
      name: "ReactJS",
      icon: FaReact,
      repoDoc: "https://github.com/argianardi/sinauReactJS",
    },
    {
      name: "NextJS",
      icon: SiNextdotjs,
      repoDoc: "https://github.com/argianardi/",
    },
    {
      name: "Bootstrap",
      icon: FaBootstrap,
      repoDoc: "https://github.com/argianardi/",
    },
    {
      name: "TailwindCSS",
      icon: SiTailwindcss,
      repoDoc: "https://github.com/argianardi/",
    },
    {
      name: "MySQL",
      icon: FaDatabase,
      repoDoc: "https://github.com/argianardi/SinauMysql",
    },
    {
      name: "ExpressJS",
      icon: SiExpress,
      repoDoc: "https://github.com/argianardi/user-role/tree/auth",
    },
    {
      name: "Sequelize",
      icon: SiSequelize,
      repoDoc: "https://github.com/argianardi/",
    },
    { name: "Git", icon: SiGit, repoDoc: "https://github.com/argianardi/" },
    {
      name: "Github",
      icon: SiGithub,
      repoDoc: "https://github.com/argianardi/",
    },
    {
      name: "Vercel",
      icon: SiVercel,
      repoDoc: "https://github.com/argianardi/",
    },
    { name: "Figma", icon: FaFigma, repoDoc: "https://github.com/argianardi/" },
  ];

  return (
    <div
      id="skills"
      className="container mx-auto max-w-[1200px] px-3 pt-3 pb-3 sm:pb-10 lg:pb-20 lg:pt-11 "
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center lg:text-left text-gradient font-secondary text-[24px] ">
          Skills
        </h2>
        <p className="text-gradient font-primary">
          As a web developer, my skills are constantly evolving. I'm passionate
          about staying up-to-date with the latest trends and technologies to
          deliver the best possible results for my clients.
        </p>

        <div className="grid grid-cols-2 mt-5 xs:grid-cols-3 xxs:grid-cols-4 gap-y-8 sm:grid-cols-6 md:grid-cols-7 lg:grid-cols-9 xl:grid-cols-10 lg:mt-10">
          {skills.map((skill) => (
            <a
              href={skill.repoDoc}
              key={skill.name}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="hover:bg-slate-200 w-24 shadow-lg shadow-[#040c16]   mx-auto rounded-md">
                <span className="flex items-center justify-center w-12 h-12 mx-auto border-2 rounded-md border-primary">
                  <skill.icon
                    size={25}
                    className="mx-auto active"
                    aria-hidden="true"
                  />
                </span>
                <h3 className="text-center text-gradient">{skill.name}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
