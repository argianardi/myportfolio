import React from "react";

const Portfolio = () => {
  return (
    <>
      <div id="portfolio" className="section">
        <div className="container mx-auto max-w-[1200px] px-3 pt-3 pb-20">
          <div className="flex flex-col lg:flex-row justify-between mb-[50px]">
            <div className="order-2 mt-5 lg:order-1">
              <h4 className="text-gradient font-secondary text-[24px]">
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
                07
              </h2>
              <p className="font-semibold font-primary text-fourth">
                Completed Projects
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
