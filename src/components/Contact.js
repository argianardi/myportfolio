import React from "react";
import { FaWhatsapp, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact">
      <div className="container mx-auto max-w-[1200px] px-3 pt-3 pb-3 sm:pb-10 lg:pb-20 lg:pt-11 text-center lg:text-left">
        <h4 className="text-gradient font-secondary text-[24px] ">
          Contact Me
        </h4>
        <p className="text-gradient font-primary">
          Have a new opportunity? Please reach me on the link down below.
        </p>
        <div className="flex flex-col max-w-sm gap-4 mx-auto mt-20 md:justify-center">
          <a
            href="https://wa.me/6285768424797"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-4 py-2 text-lg font-bold text-white bg-green-500 rounded-full hover:bg-green-600"
          >
            <FaWhatsapp className="mr-2" />
            Contact me via WhatsApp
          </a>
          <a
            href="mailto:argianardi14@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-4 py-2 text-lg font-bold text-white bg-blue-500 rounded-full hover:bg-blue-600"
          >
            <FaEnvelope className="mr-2" />
            Contact me via Email
          </a>
          <a
            href="https://www.linkedin.com/in/argianardiprasetya"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-4 py-2 text-lg font-bold text-white bg-gray-800 rounded-full hover:bg-gray-900"
          >
            <FaLinkedin className="mr-2" />
            View my LinkedIn profile
          </a>
          <a
            href="https://www.linkedin.com/in/argianardiprasetya"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-4 py-2 text-lg font-bold text-white bg-gray-800 rounded-full hover:bg-gray-900"
          >
            <FaGithub className="mr-2" />
            View my Github profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
