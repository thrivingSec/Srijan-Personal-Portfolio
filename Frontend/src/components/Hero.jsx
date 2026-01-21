import React from "react";
import profileImg from "../assets/profileImg.jpg";

const Hero = () => {
  return (
    <div
      className="w-full flex items-center justify-center mt-15 overflow-hidden mb-5"
      id="home"
    >
      <div className="w-[80%] lg:max-w-7xl mx-auto flex flex-1 flex-col items-center justify-center gap-5">
        <div className="w-[225px] h-[225px] rounded-full overflow-hidden">
          <img src={profileImg} alt="" className="w-full h-full object-cover" />
        </div>
        <h1 className="text-center text-6xl font-semibold text-white w-[80%] lg:max-w-3/5">
          <span className="text-transparent bg-clip-text bg-linear-to-r from-[#1717be] to-[#b910b9] lg:animate-pulse">
            I'm Srijan
          </span>
          , Full Stack Developer based in India.
        </h1>
        <p className="text-center text-lg text-white lg:max-w-2/4 w-[60%]">
          I’m a Full-Stack Developer focused on building modern, real-time, AI
          powered production ready systems with clean and scalable architectures
        </p>
        <div className="flex items-center justify-center">
          <a
            className="mt-2 mb-2 px-5 py-3 border-2 border-purple-600 hover:border-0 hover:bg-linear-to-r  hover:from-[#1717be] hover:to-[#b910b9] rounded-full text-white text-lg transition-all duration-500 cursor-pointer"
            href="https://drive.google.com/file/d/1onExA42d8KfFCS4rON1gUxEtRlJGY2zm/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
