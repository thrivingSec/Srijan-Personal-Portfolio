import React from "react";
// Make sure this path is correct for your project
import me from "../assets/me.jpg";

const About = () => {
  return (
    <div
      className="w-full flex items-center justify-center mt-20 mb-20 px-6 font-sans"
      id="about"
    >
      <div className="w-full max-w-7xl flex flex-col gap-10">
        {/* Section Title */}
        <div className="flex flex-col items-center justify-center mb-6">
          <h1 className="text-4xl lg:text-5xl text-white font-bold text-center tracking-tight">
            About Me
          </h1>
          <div className="w-20 h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mt-6 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.5)]"></div>
        </div>

        {/* BENTO BOX GRID CONTAINER */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 w-full">
          {/* TILE 1: THE BIO (Spans 3 columns on large screens) */}
          <div className="lg:col-span-3 relative group bg-white/[0.03] border border-white/[0.08] rounded-3xl p-8 lg:p-12 shadow-2xl backdrop-blur-xl overflow-hidden transition-all duration-500 hover:bg-white/[0.05] hover:border-indigo-500/30 hover:-translate-y-1 hover:shadow-indigo-500/10 flex flex-col justify-center">
            {/* Subtle background glow */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl transition-all group-hover:bg-indigo-500/20"></div>

            <h2 className="text-3xl text-white font-bold mb-6 tracking-wide">
              Engineering Philosophy
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed text-start font-light z-10">
              I’m a full-stack web developer, focused on building intelligent AI
              systems and scalable SAAS applications using the Next.js | MERN
              stack. My focus is on bridging the gap between robust Full Stack
              engineering and modern AI capabilities. I believe in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 font-semibold drop-shadow-sm">
                First Principle Thinking
              </span>{" "}
              — understanding the "why" before writing the code.
            </p>

            <div className="mt-8 p-5 bg-indigo-950/30 border border-indigo-500/20 rounded-2xl backdrop-blur-sm z-10">
              <p className="text-indigo-200 text-base font-medium flex items-center gap-3">
                <span className="text-xl">💡</span> Fun fact: I enjoy debugging
                and optimizing code just as much as writing new features!
              </p>
            </div>
          </div>

          {/* TILE 2: THE IMAGE (Spans 1 column) */}
          <div className="lg:col-span-1 h-[350px] lg:h-auto rounded-3xl overflow-hidden shadow-2xl relative group border border-white/[0.08] hover:border-purple-500/30 transition-all duration-500 hover:-translate-y-1">
            {/* Gradient overlay for a cinematic feel */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-80 z-10"></div>
            <div className="absolute inset-0 bg-indigo-500/10 group-hover:bg-transparent transition duration-700 z-10 mix-blend-overlay"></div>
            <img
              src={me}
              alt="me"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
          </div>

          {/* TILE 3: CORE SKILLS (Now spans all 4 columns to balance the grid!) */}
          <div className="lg:col-span-4 bg-white/[0.03] border border-white/[0.08] rounded-3xl p-8 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:bg-white/[0.05] hover:border-indigo-500/40 hover:-translate-y-1 hover:shadow-indigo-500/10">
            <SkillGrid
              title={"Core"}
              items={[
                "Javascript",
                "TypeScript",
                "Next.js",
                "React.js",
                "Node.js",
                "Express.js",
                "Redis",
                "Docker",
                "RabbitMQ",
                "Kafka",
                "Microservices",
                "Langchain",
                "Langgraph",
                "RAG",
                "VectorDB",
              ]}
              color="indigo"
            />
          </div>

          {/* TILE 4: DATABASE (Spans 2 columns, sitting perfectly on the bottom left) */}
          <div className="lg:col-span-2 bg-white/[0.03] border border-white/[0.08] rounded-3xl p-8 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:bg-white/[0.05] hover:border-indigo-500/40 hover:-translate-y-1 hover:shadow-indigo-500/10">
            <SkillGrid
              title={"Database"}
              items={["MongoDB", "PostgreSQL", "Supabase"]}
              color="indigo"
            />
          </div>

          {/* TILE 5: OTHERS (Spans 2 columns, sitting perfectly on the bottom right) */}
          <div className="lg:col-span-2 bg-white/[0.03] border border-white/[0.08] rounded-3xl p-8 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:bg-white/[0.05] hover:border-purple-500/40 hover:-translate-y-1 hover:shadow-purple-500/10">
            <SkillGrid
              title={"Others"}
              items={["Git", "GitHub", "Postman"]}
              color="purple"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

// Updated to feature pill-shaped glowing tags
function SkillGrid({ title, items, color }) {
  // Determine gradient colors based on the passed color prop
  const gradientClass =
    color === "indigo"
      ? "from-indigo-400 to-blue-400"
      : "from-purple-400 to-pink-400";

  const hoverBorderClass =
    color === "indigo" ? "hover:border-indigo-400" : "hover:border-purple-400";

  const hoverBgClass =
    color === "indigo" ? "hover:bg-indigo-500/20" : "hover:bg-purple-500/20";

  const hoverShadowClass =
    color === "indigo"
      ? "hover:shadow-[0_0_15px_rgba(99,102,241,0.3)]"
      : "hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]";

  return (
    <div className="flex flex-col gap-6 h-full relative z-10">
      <h3
        className={`text-lg font-bold bg-gradient-to-r ${gradientClass} bg-clip-text text-transparent uppercase tracking-widest`}
      >
        {title}
      </h3>
      <div className="flex flex-wrap gap-3 mt-auto">
        {items.map((item, idx) => (
          <span
            key={idx}
            className={`text-gray-300 text-sm font-medium px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 transition-all duration-300 cursor-default hover:text-white ${hoverBorderClass} ${hoverBgClass} ${hoverShadowClass} hover:-translate-y-0.5`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
