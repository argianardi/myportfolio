import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { ImDownload } from 'react-icons/im';

const Profile = () => {
  return (
    <>
      <div
        id="profile"
        className="section container mx-auto max-w-[1200px] px-3 items-center bm"
      >
        <div className="w-full">
          <img
            src="/images/profilePicture.jpg"
            alt="profile "
            className="mx-auto rounded-full"
          />
          <div className="block text-center font-secondary font-black text-xl lg:text-[30px]">
            Hello, I am
            <div className="mt-0 lg:mt-3">
              <TypeAnimation
                sequence={[
                  'Argian Ardi Prasetya',
                  3000,
                  'Frontend Developer',
                  3000,
                  'Backend Developer',
                  3000,
                  'Fullstack Developer',
                  3000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                className="ml-3 text-secondary"
              />
            </div>
          </div>
          <div className="px-0 mt-3 lg:px-24 ">
            <p className="text-sm font-primary text-gradient">
              A Software Developer with over 1 year of experience in designing
              and developing applications. Proficient in HTML, CSS, JavaScript,
              TypeScript, and Node.js, as well as modern frontend frameworks
              like Bootstrap, Tailwind CSS, React JS, and Next JS, and backend
              frameworks like Express JS. Experienced in building and
              integrating RESTful APIs, creating applications from scratch, and
              working with relational and non-relational databases like MySQL
              and MongoDB. Able to collaborate effectively with other developers
              and team members to deliver high-quality applications. Passionate
              about learning new technologies and eager to contribute to dynamic
              projects while continuing professional growth in a fast-paced
              environment.
            </p>
            <a
              href="https://drive.google.com/file/d/1rywqIL3epOaElZtRfjvSdHuW1CXhYoW2/view"
              target="_blank"
              rel="noreferrer"
              className="flex w-48 px-2 py-1 mt-3 text-blue-900 rounded-sm hover:bg-slate-200 bg-gradient hover:text-white"
            >
              <ImDownload size={25} />
              <p className="ml-1 font-bold font-primary">Download My CV</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
