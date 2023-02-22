import React from "react";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  return (
    <>
      <div
        id="home"
        className="section container mx-auto max-w-[1200px] px-3 items-center bh"
      >
        <div className="w-full">
          <div className="block text-center font-secondary font-black text-[30px]">
            Hello, I am
            <div>
              <TypeAnimation
                sequence={[
                  "Argian Ardi Prasetya",
                  3000,
                  "Frontend Developer",
                  3000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                className="ml-3 text-secondary"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
