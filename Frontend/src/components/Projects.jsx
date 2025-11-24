import React from "react";
import aiAssistant from "../assets/AIVirtualAssistant.png";
import textin from "../assets/Textin.png";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <div
      className="w-full flex flex-col items-center justify-center mt-20 overflow-hidden "
      id="projects"
    >
      <h1 className="text-6xl text-white font-medium text-center">
        Major Projects
      </h1>
      <div className="w-[80%] lg:max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center mt-15 gap-10">
        {/* left */}
        <div className="w-[80%] lg:w-[40%] border-2 border-purple-600 rounded-md p-2 flex flex-col justify-start items-start gap-5 hover:scale-105 transition-all duration-500 mb-10">
          <div className="w-full border-0 rounded-md overflow-hidden h-[250px]">
            <img src={aiAssistant} alt="" className="w-full h-full" />
          </div>
          <div className="w-full text-white text-sm font-medium">
            A smart, general-purpose AI assistant built with the MERN stack,
            powered by the Gemini LLM, featuring secure authentication,
            customizable assistant persona, voice-based activation, and
            intelligent conversation history management.
          </div>
          <div className="w-full text-white text-sm font-medium flex flex-col items-start justify-start">
            <p>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#1717be] to-[#b910b9]">
                Frontend:
              </span>{" "}
              React, Tailwind, Axios, Redux
            </p>
            <p>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#1717be] to-[#b910b9]">
                Backend:
              </span>{" "}
              Node, Express, MongoDB, Gemini API, Nodemailer
            </p>
          </div>
          <div className="flex items-center justify-center">
            <a
              className="mt-2 px-5 py-3 bg-linear-to-r  from-[#1717be] to-[#b910b9] rounded-full text-white text-md font-medium flex gap-2 cursor-pointer"
              href={"https://github.com/thrivingSec/AI_Virtual_Assistant"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Github</span> <FaGithub className="inline-block size-5" />
            </a>
          </div>
        </div>
        {/* right */}
        <div className="w-[80%] lg:w-[40%] border-2 border-purple-600 rounded-md p-2 flex flex-col justify-start items-start gap-5 hover:scale-105 transition-all duration-500 mb-10">
          <div className="w-full border-0 rounded-md overflow-hidden h-[250px]">
            <img src={textin} alt="" className="w-full h-full" />
          </div>
          <div className="w-full text-white text-sm font-medium">
            Textin is a full-stack real-time chat application built with the
            MERN stack and Socket.IO, featuring secure authentication, user
            connections, and instant messaging. Designed with scalability,
            modularity, and clean code architecture in mind.
          </div>
          <div className="w-full text-white text-sm font-medium flex flex-col items-start justify-start">
            <p>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#1717be] to-[#b910b9]">
                Frontend:
              </span>{" "}
              React, Tailwind, Axios, Redux
            </p>
            <p>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#1717be] to-[#b910b9]">
                Backend:
              </span>{" "}
              Node, Express, MongoDB, Socket.IO, Nodemailer
            </p>
          </div>
          <div className=" items-center justify-center">
            <a
              className="mt-2 px-5 py-3 bg-linear-to-r  from-[#1717be] to-[#b910b9] rounded-full text-white text-md font-medium flex gap-2 cursor-pointer"
              href={"https://github.com/thrivingSec/Textin"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Github</span> <FaGithub className="inline-block size-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
