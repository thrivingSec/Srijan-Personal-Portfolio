import React from "react";
import { FaGithub } from "react-icons/fa";
import { ExternalLink } from "lucide-react";
import aiAssistant from "../assets/AIVirtualAssistant.png";
import textin from "../assets/Textin.png";
import talkToYourDocs from "../assets/TalkToYourDocs.png";
import sociaBackend from "../assets/socialbackend.png";

const projects = [
  {
    id: "SocialBackend",
    title: "Social Backend",
    image: sociaBackend,
    description:
      "A backend platform for a social application, built as a collection of Node.js microservices. An API Gateway is the single entry point; it handles authentication, rate limiting, and request routing to dedicated services for identity, posts, media, search, and email utilities.",
    tags: [
      "Node.js",
      "Express.js",
      "TypeScript",
      "Redis",
      "Docker",
      "MongoDB",
      "RabbitMQ",
      "Microservices",
      "RESTful APIs",
    ],
    githubUrl: "https://github.com/thrivingSec/SocialMicroservicesBackend",
  },
  {
    id: "TalktoYourDocs",
    title: "TalkToYourDocs",
    image: talkToYourDocs,
    description:
      "An end‑to‑end agentic Retrieval‑Augmented Generation (RAG) system built on Next.js App Router, LangGraph, Google Gemini (chat + embeddings), MongoDB vector search, and Upstash Redis.",
    tags: [
      "Next.js",
      "TypeScript",
      "Redis",
      "Tailwind",
      "LangChain",
      "Langgraph",
      "RAG",
      "Gemini",
    ],
    githubUrl: "https://github.com/thrivingSec/TalkToYourDocs",
  },
  {
    id: "ai-assistant",
    title: "AI Virtual Assistant",
    image: aiAssistant,
    description:
      "A smart, general-purpose AI assistant powered by Gemini, featuring secure authentication, customizable persona, voice activation, and intelligent conversation history.",
    tags: ["React", "Redux", "Node.js", "MongoDB", "Gemini API", "MERN"],
    githubUrl: "https://github.com/thrivingSec/AI_Virtual_Assistant",
  },
  {
    id: "textin",
    title: "Textin — Real-time Chat",
    image: textin,
    description:
      "A full-stack real-time chat application with secure authentication, user connections, and instant messaging. Built for scalability with modular, clean architecture.",
    tags: ["React", "Redux", "Socket.IO", "Node.js", "MongoDB", "MERN"],
    githubUrl: "https://github.com/thrivingSec/Textin",
  },
];

function ProjectCard({ project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-purple-500/30 bg-gray-900/50 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/60 hover:shadow-purple-700/25">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-gray-950/80 via-gray-950/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <h3 className="text-xl font-semibold text-white">{project.title}</h3>

        <p className="flex-1 text-sm leading-relaxed text-gray-300 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-gray-700 bg-gray-800/60 px-2.5 py-1 text-xs font-medium text-gray-300 transition-colors duration-300 group-hover:border-purple-500/40"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-[#1717be] to-[#b910b9] px-5 py-2.5 text-sm font-medium text-white transition-opacity duration-300 hover:opacity-90"
          >
            <FaGithub className="size-4" />
            <span>Source Code</span>
          </a>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-purple-500/50 px-5 py-2.5 text-sm font-medium text-purple-300 transition-colors duration-300 hover:border-purple-400 hover:bg-purple-500/10"
            >
              <ExternalLink className="size-4" />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

const Projects = () => {
  return (
    <section
      className="flex w-full flex-col items-center justify-center py-20"
      id="projects"
    >
      <div className="mx-auto flex w-[90%] max-w-7xl flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="text-4xl font-semibold text-white lg:text-6xl">
            Major Projects
          </h2>
          <p className="max-w-2xl text-sm font-medium text-gray-400 lg:text-base">
            Selected work spanning AI systems, authentication, and full-stack
            applications.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 2xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
