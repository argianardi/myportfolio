import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Header = () => {
  return (
    <div className="container mx-auto max-w-[1200px] px-3 relative lg:absolute left-0 right-0">
      <div className="flex items-center justify-between py-5">
        <div
          className="text-gradient font-secondary"
          data-aos="fade-right"
          data-aos-easing="ease-in-sine"
          data-aos-duration="500"
          data-aos-delay="0"
        >
          <a href="/">
            <h1 className=" text-[30px] leading-none font-extrabold">Argian</h1>
            <h4 className="mt-2 font-normal leading-none ">Ardi Prasetya</h4>
          </a>
        </div>
        <div
          className="flex items-center space-x-3"
          data-aos="fade-left"
          data-aos-easing="ease-in-sine"
          data-aos-duration="500"
          data-aos-delay="0"
        >
          <a
            href="https://github.com/argianardi"
            className="p-2 hover:bg-slate-200 "
          >
            <BsGithub size={30} className="text-blue-900" />
          </a>
          <a
            href="https://www.linkedin.com/in/argianardiprasetya/"
            className="p-2 hover:bg-slate-200 "
          >
            <BsLinkedin size={30} className="text-blue-900" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
