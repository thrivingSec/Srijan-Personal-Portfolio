import React from "react";
import { Code, Layers, Database, Rocket } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "Full-Stack Web Development",
      icon: <Layers size={32} />,
      desc: "End-to-end Next.js | MERN applications with secure auth, scalable APIs, and clean architecture.",
      points: [
        "MERN stack applications",
        "Next.js application",
        "Typescript",
        "JWT authentication",
        "Responsive UI",
        "Deployments (Vercel/Render)",
      ],
    },
    {
      title: "LLM Orchestration",
      icon: <Code size={32} />,
      desc: " Architecting intelligent agents using LangChain and Vector Databases",
      points: [
        "AI powered SAAS",
        "Multi model support systems",
        "Vector DB at scale",
      ],
    },
    {
      title: "Backend API Development",
      icon: <Database size={32} />,
      desc: "Secure REST APIs with efficient routing, validation, and database structures.",
      points: [
        "Node.js + Express",
        "MongoDB/Mongoose | Supabase/Prisma",
        "API rate limiting",
        "Error-handling & best practices",
      ],
    },
    {
      title: "Bug Fixing & Optimization",
      icon: <Code size={32} />,
      desc: "Debugging, code refactoring, and performance improvements for existing apps.",
      points: [
        "Code cleanup",
        "Logic fixes",
        "Performance tuning",
        "UI/UX improvements",
      ],
    },
  ];

  return (
    <section
      className="w-full py-20 flex justify-center items-center"
      id="services"
    >
      <div className="w-[80%] lg:max-w-5xl mx-auto flex flex-col items-center gap-12">
        {/* Heading */}
        <h2 className="text-4xl lg:text-6xl font-semibold text-white text-center">
          Services
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 w-full">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="p-8 border-2 border-purple-600 rounded-2xl bg-gray-900/40 shadow-xl hover:shadow-purple-700/40 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-purple-400 mb-4">{service.icon}</div>

              <h3 className="text-2xl font-semibold text-white mb-2">
                {service.title}
              </h3>

              <p className="text-gray-300 text-sm font-medium leading-relaxed mb-4">
                {service.desc}
              </p>

              <ul className="flex flex-col gap-2 text-gray-400 text-sm font-medium">
                {service.points.map((p, i) => (
                  <li key={i} className="flex gap-2 items-center">
                    <span className="text-purple-600">•</span> {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
