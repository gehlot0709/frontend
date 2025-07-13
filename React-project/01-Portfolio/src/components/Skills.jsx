import { useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiBootstrap,
  SiExpress,
} from "react-icons/si";

const Skills = () => {
  const [isActive, setIsActive] = useState(true);

  const frontendSkills = [
    { icon: <FaHtml5 />, color: "text-orange-500", label: "HTML" },
    { icon: <FaCss3Alt />, color: "text-blue-500", label: "CSS" },
    { icon: <FaJs />, color: "text-yellow-400", label: "JavaScript" },
    { icon: <FaReact />, color: "text-cyan-400", label: "React" },
    { icon: <SiTailwindcss />, color: "text-sky-400", label: "Tailwind CSS" },
    { icon: <SiBootstrap />, color: "text-purple-600", label: "Bootstrap" },
    { icon: <FaGithub />, color: "text-black", label: "GitHub" },
  ];

  const backendSkills = [
    { icon: <FaNodeJs />, color: "text-green-500", label: "Node.js" },
    { icon: <SiExpress />, color: "text-gray-800", label: "Express.js" },
    { icon: <SiMongodb />, color: "text-green-600", label: "MongoDB" },
    { icon: <FaGithub />, color: "text-black", label: "GitHub" },
    { icon: <FaJs />, color: "text-yellow-400", label: "JavaScript" },
  ];

  const skillsToDisplay = isActive ? frontendSkills : backendSkills;

  return (
    <section className="skills py-16 dark:bg-gray-900 mt-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills</h2>
          <p className="text-gray-800 dark:text-gray-200">
            I specialize in full-stack web development using modern tools and
            frameworks.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex justify-center gap-4 flex-wrap">
            <button
              onClick={() => setIsActive(true)}
              className={`px-6 py-2 rounded-full text-lg font-semibold transition-all duration-300 ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "bg-white text-black border border-gray-300"
              }`}
            >
              Frontend
            </button>
            <button
              onClick={() => setIsActive(false)}
              className={`px-6 py-2 rounded-full text-lg font-semibold transition-all duration-300 ${
                !isActive
                  ? "bg-blue-600 text-white"
                  : "bg-white text-black border border-gray-300"
              }`}
            >
              Backend
            </button>
          </div>
        </div>

        {/* Skills Icons */}
        <ul className="flex justify-center flex-wrap gap-4">
          {skillsToDisplay.map(({ icon, color, label }, i) => (
            <li
              key={i}
              className="w-24 h-28 sm:w-28 sm:h-32 bg-gray-700 text-white rounded-2xl flex flex-col items-center justify-center transition-transform hover:scale-105"
            >
              <div className={`text-4xl sm:text-5xl ${color}`}>{icon}</div>
              <span className="mt-2 text-sm sm:text-base">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
