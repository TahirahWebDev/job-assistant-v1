import React from "react";
import Image from "next/image";
import about from "../../../public/images/about.png";

const About = () => {
  return (
    <div className="flex justify-center">
      <div className="h-[800px] sm:h-[800px] w-[1400px] flex flex-col sm:flex  sm:flex-row sm:justify-around items-center">
        <div className="text-center m-6">
          <h1 className="my-12 text-5xl sm:text-6xl font-bold text-accent animate-color-change text-gray-400">
            <span className="text-orange-300">Abo</span><span className="text-green-300">ut</span> <span className="text-blue-300">Us</span>
          </h1>
          <p className="sm:text-center font-semibold text-black ">
          Welcome to the ultimate productivity hub , designed to streamline your career development and communication needs.<br />   Our platform centralizes multiple powerful tools to help you succeed, from general knowledge  assistance to <br />  specialized career  preparation.  Whether you're seeking guidance on resume building, interview tips,   or want to enhance <br />  your professional  skills, 
            our AI-powered solutions  are here to support you every step of the way.  Collaborate, <br />  learn, and grow with resources
            tailored for both individuals and teams.
          </p>
        </div>
        <div>
          <Image
            src={about}
            alt="about-us"
            className="border-[2px] border-blue-300 border-l-orange-300 border-r-green-300 sm:rounded-sm w-[300px] sm:h-[400px] sm:w-[400px]"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
