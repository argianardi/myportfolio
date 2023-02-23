import React from "react";
import { data } from "../data/data";

const Portfolio = () => {
  const projects = data;
  return (
    <>
      <div id="portfolio">
        <div className="container mx-auto max-w-[1200px] px-3 pt-3 pb-20">
          <div className="flex flex-col lg:flex-row justify-between mb-[50px]">
            <h4 className="text-gradient font-secondary text-[24px] block text-center lg:hidden">
              My Latest Projects
            </h4>
            <div className="order-2 mt-5 lg:order-1">
              <h4 className="text-gradient font-secondary text-[24px] hidden lg:block">
                My Latest Projects
              </h4>
              <div className="text-gradient font-primary max-w-[700px] mx-auto text-sm">
                Every project that I work on always presents its own challenges
                and difficulties. However, with the passion and dedication that
                I possess, I have been able to successfully complete those
                projects. I hope that the projects showcased in this portfolio
                website can provide an insight into my creativity and abilities.
              </div>
            </div>
            <div className="order-1 text-center lg:order-2">
              <h2 className="text-secondary font-primary max-w-[700px] mx-auto text-[50px]">
                {projects.length}
              </h2>
              <p className="font-semibold font-primary text-fourth">
                Completed Projects
              </p>
            </div>
          </div>

          {/* container for projects */}
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {/* Gird Item */}
            {projects.map((item, index) => (
              <div
                key={index}
                className="shadow-lg shadow-[#040c16] container rounded-md 
               text-center  mx-auto h-80"
              >
                <img
                  src={item.image}
                  alt="item.name"
                  className="mx-auto border-2 rounded-md border-b-fourth h-60"
                />
                <span className="text-xl font-bold tracking-wider text-gray-700 text-gradient lg:text-2xl">
                  {item.name}
                </span>
                <div className="text-center">
                  <a href={item.sourceCode} target="_blank">
                    <button className="px-4 m-2 text-lg font-bold text-center text-gray-700 rounded-sm hover:bg-slate-200 text-gradient">
                      Code
                    </button>
                  </a>
                  <a href={item.demo} target="_blank">
                    <button className="px-4 m-2 text-lg font-bold text-center text-gray-700 rounded-sm hover:bg-slate-200 text-gradient">
                      Demo
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
