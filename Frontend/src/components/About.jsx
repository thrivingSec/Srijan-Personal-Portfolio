import React from "react";
import me from "../assets/me.jpg";

const About = () => {
  return (
    <div
      className="w-full flex items-center justify-center mt-15 gap-5"
      id="about"
    >
      <div className="w-[80%] lg:max-w-7xl mx-auto flex flex-1 flex-col justify-center items-center gap-5">
        <h1 className="text-6xl text-white font-medium text-center">
          About Me
        </h1>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-15 mt-5 lg:px-25">
          <div className="w-[250px] h-[350px] rounded-md overflow-hidden shadow-2xl shadow-gray-400">
            <img src={me} alt="me" className="w-full h-full object" />
          </div>
          <div className="w-[70%] flex flex-col gap-5">
            <p className="text-white text-md font-semibold text-start">
              I’m a MERN Stack Developer focused on building modern, real-time
              web applications with clean and scalable architectures. I love
              transforming ideas into fully functional products using efficient,
              maintainable codebases. <br />
              Fun fact: I enjoy debugging and optimizing code just as much as
              writing new features!
            </p>
            <div className="flex flex-col justify-start items-start gap-5">
              {/* Languages */}
              <SkillRow title={"Languages"} items={["Javascript", "Python"]} />
              {/* Frontend */}
              <SkillRow
                title={"Frontend"}
                items={["React", "HTML", "CSS", "Tailwind", "Redux", "Axios"]}
              />
              {/* backend */}
              <SkillRow
                title={"Backend"}
                items={["Node.js", "Express.js", "MongoDB", "Mongoose"]}
              />
              {/* others */}
              <SkillRow title={"Others"} items={["Git", "GitHub", "Postman"]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

function SkillRow({ title, items }) {
  return (
    <div className="flex flex-wrap justify-start gap-4 items-center">
      <span className="text-lg font-semibold bg-linear-to-r from-[#4f46e5] to-[#a21caf] bg-clip-text text-transparent">
        {title}:
      </span>
      {items.map((item, idx) => (
        <span
          key={idx}
          className="text-white text-md font-medium px-3 py-1 rounded-full border border-gray-600 hover:border-purple-500 transition-all duration-300"
        >
          {item}
        </span>
      ))}
    </div>
  );
}
