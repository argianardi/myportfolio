import React from "react";
import { TypeAnimation } from "react-type-animation";

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
          <p className="text-sm px-0  font-primary lg:px-24 mt-3">
            I am Frontend Developer with Mechanical Engineering Degree.
            Graduates from Alterra Academy Intensive Program focus on Front-End
            Web Development. Proficient with HTML, CSS, JavaScript (ReactJS,
            NextJS, NodeJS, ExpressJS) and MYSQL. I have project experiences use
            RESTful API like Immersive Dashboard for management of student data
            and Online Store Web Application as a Frontend Developer
            collaborating with a Backend Developer Team.
          </p>
          <p className="text-sm px-0 font-primary lg:px-24 mt-3">
            I also have personal projects using an API consumption Web App named
            getMovies and getNews.Currently, I'm looking for Frontend Developer
            position with a company where I can implement my ability and grow up
            either my skills or personal growth as Frontend Developer.
          </p>
        </div>
      </div>
    </>
  );
};

export default Profile;
