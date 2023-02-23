import React from "react";
import { TypeAnimation } from "react-type-animation";
import { ImDownload } from "react-icons/im";

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
            alt="profile picture"
            className="mx-auto rounded-full"
          />
          <div className="block text-center font-secondary font-black text-xl lg:text-[30px]">
            Hello, I am
            <div className="mt-0 lg:mt-3">
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
          <div className="px-0 mt-3 lg:px-24 ">
            <p className="text-sm font-primary text-gradient">
              I am Frontend Developer with Mechanical Engineering Degree.
              Graduates from Alterra Academy Intensive Program focus on
              Front-End Web Development. Proficient with HTML, CSS, JavaScript
              (ReactJS, NextJS, NodeJS, ExpressJS) and MYSQL. I have project
              experiences use RESTful API like Immersive Dashboard for
              management of student data and Online Store Web Application as a
              Frontend Developer collaborating with a Backend Developer Team.
            </p>
            <p className="mt-3 text-sm font-primary text-gradient">
              I also have personal projects using an API consumption Web App
              named getMovies and getNews.Currently, I'm looking for Frontend
              Developer position with a company where I can implement my ability
              and grow up either my skills or personal growth as Frontend
              Developer.
            </p>
            <a
              href="https://drive.google.com/file/d/17xF-nIP3lqczkDvgQa35P_GUPe0HtxM5/view?usp=share_link"
              target="_blank"
              className="flex w-56 p-1 mt-3 text-blue-900 hover:bg-slate-200"
            >
              <ImDownload size={25} />
              <p className="ml-1 font-bold font-primary">My Curriculum Vitae</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
