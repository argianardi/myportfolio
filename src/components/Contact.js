import React from "react";
import { FaWhatsapp, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact">
      <div className="mb-10 container mx-auto max-w-[1200px] px-3 py-0 sm:py-12 pb-0 sm:pb-10 lg:pb-5 lg:pt-11 lg:text-left">
        <h4 className="mb-2 sm:mb-5 text-gradient font-secondary text-[24px] text-center lg:text-left">
          Contact Me
        </h4>
        <div className="mx-auto text-gradient font-primary">
          <p>
            Thank you for visiting my portfolio! If you have any inquiries or
            just want to say hello, feel free to get in touch with me through
            the contact information below. I am always eager to collaborate on
            exciting new projects and expand my network, so I would love to hear
            from you. Reach me on the link down below.
          </p>
        </div>
        <div className="flex flex-col max-w-xs gap-4 mx-auto mt-3 sm:mt-20 sm:gap-7 md:justify-center">
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
            href="https://github.com/argianardi"
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
