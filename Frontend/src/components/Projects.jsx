import React from "react";
import aiAssistant from "../assets/AIVirtualAssistant.png";
import textin from "../assets/Textin.png";
import lcel from "../assets/LCEL.png";
import nextAuth from "../assets/Next-Auth-System.png";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <div
      className="w-full flex flex-col items-center justify-center mt-20 overflow-hidden "
      id="projects"
    >
      <h1 className="text-4xl lg:text-6xl text-white font-medium text-center">
        Major Projects
      </h1>
      <div className="w-[90%] lg:max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 mt-15 place-items-center place-content-stretch gap-2">
        <div className="w-full lg:max-w-lg border-2 border-purple-600 rounded-md p-2 flex flex-col justify-start items-start gap-5 hover:scale-105 transition-all duration-500 mb-10">
          <div className="w-full border-0 rounded-md overflow-hidden h-[250px]">
            <img src={lcel} alt="" className="w-full h-full" />
          </div>
          <div className="w-full text-white text-sm font-medium">
            A full-stack Retrieval Augmented Generation (RAG) application with
            intelligent routing that combines web search capabilities with a
            local knowledge base. Built with LangChain Expression Language
            (LCEL), this project demonstrates advanced tool calling patterns for
            AI-powered question answering.
          </div>
          <div className="w-full text-white text-sm font-medium flex flex-col items-start justify-start">
            <p>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#1717be] to-[#b910b9]">
                Frontend:
              </span>{" "}
              Next.js, Tailwind, Axios, Shadcn
            </p>
            <p>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#1717be] to-[#b910b9]">
                Backend:
              </span>{" "}
              Node, Express, Langchain, Gemini, OpenAI, Groq, RAG
            </p>
          </div>
          <div className=" items-center justify-center">
            <a
              className="mt-2 px-5 py-3 bg-linear-to-r  from-[#1717be] to-[#b910b9] rounded-full text-white text-md font-medium flex gap-2 cursor-pointer"
              href={"https://github.com/thrivingSec/Tool-Calling-Light-RAG"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Github</span> <FaGithub className="inline-block size-5" />
            </a>
          </div>
        </div>
        <div className="w-full lg:max-w-lg border-2 border-purple-600 rounded-md p-2 flex flex-col justify-start items-start gap-5 hover:scale-105 transition-all duration-500 mb-10">
          <div className="w-full border-0 rounded-md overflow-hidden h-[250px]">
            <img src={nextAuth} alt="" className="w-full h-full" />
          </div>
          <div className="w-full text-white text-sm font-medium">
            A production-ready, scalable authentication system built with
            Next.js, NextAuth.js, Redis, Prisma, and Supabase. This project
            demonstrates modern authentication patterns with email verification,
            password reset, and secure session management.
          </div>
          <div className="w-full text-white text-sm font-medium flex flex-col items-start justify-start">
            <p>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#1717be] to-[#b910b9]">
                Frontend:
              </span>{" "}
              Next.js(App Router), Tailwind, Axios, Shandcn
            </p>
            <p>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#1717be] to-[#b910b9]">
                Backend:
              </span>{" "}
              Next.js(API), NextAuth, Supabase, Prisma, Nodemailer, Redis,
              Upstash
            </p>
          </div>
          <div className=" items-center justify-center">
            <a
              className="mt-2 px-5 py-3 bg-linear-to-r  from-[#1717be] to-[#b910b9] rounded-full text-white text-md font-medium flex gap-2 cursor-pointer"
              href={"https://github.com/thrivingSec/next-auth-system"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Github</span> <FaGithub className="inline-block size-5" />
            </a>
          </div>
        </div>
        <div className="w-full lg:max-w-lg border-2 border-purple-600 rounded-md p-2 flex flex-col justify-start items-start gap-5 hover:scale-105 transition-all duration-500 mb-10">
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
        <div className="w-full lg:max-w-lg border-2 border-purple-600 rounded-md p-2 flex flex-col justify-start items-start gap-5 hover:scale-105 transition-all duration-500 mb-10">
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
