import React from "react";
import Link from "react-scroll/modules/components/Link";
import { BiHomeAlt, BiUser, BicodeAlt, BiCodeAlt } from "react-icons/bi";

const Navigation = () => {
  return (
    <div className="fixed bottom-4 left-0 right-0 text-center z-10 lg:translate-y-[-50%] lg:top-[50%] lg:left-auto lg:right-5">
      <div className="flex justify-between mx-auto bg-white text-secondary p-2 rounded-full border-secondary border-solid border-[1px] max-w-[200px] lg:flex-col">
        <Link
          to="home"
          className="flex w-[50px] h-[50px] justify-center items-center cursor-pointer"
          activeClass="active"
          offset={-100}
          smooth={true}
          spy={true}
        >
          <BiHomeAlt />
        </Link>
        <Link
          to="profile"
          className="flex w-[50px] h-[50px] justify-center items-center cursor-pointer"
          activeClass="active"
          offset={0}
          smooth={true}
          spy={true}
        >
          <BiUser />
        </Link>
        <Link
          to="portfolio"
          className="flex w-[50px] h-[50px] justify-center items-center cursor-pointer"
          activeClass="active"
          offset={-100}
          smooth={true}
          spy={true}
        >
          <BiCodeAlt />
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
