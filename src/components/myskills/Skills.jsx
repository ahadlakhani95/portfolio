import "./myskills.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
} from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiExpress, SiMongodb } from "react-icons/si";

const skills = [
  { name: "HTML 5", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "React.js", icon: <FaReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaGithub /> },
];

export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <h1 className="skills-title">My Skills</h1>

      <div className="skills-grid">
        {skills.map((skill, index) => (
        <div className="skill-card" key={index} data-skill={skill.name}>
        <span className="skill-icon">{skill.icon}</span>
        <p className="skill-name">{skill.name}</p>
        </div>
        ))}
      </div>
    </section>
  );
}
