import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { 
  FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGithub 
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiJavascript, SiExpress, 
  SiMysql, SiMongodb, SiSolidity 
} from 'react-icons/si';

const StackIcon = ({ name }) => {
  const iconMap = {
    html5: <FaHtml5 size={40} />,
    css3: <FaCss3Alt size={40} />,
    tailwind: <SiTailwindcss size={40} />,
    javascript: <SiJavascript size={40} />,
    react: <FaReact size={40} />,
    nodejs: <FaNodeJs size={40} />,
    express: <SiExpress size={40} />,
    mysql: <SiMysql size={40} />,
    mongodb: <SiMongodb size={40} />,
    solidity: <SiSolidity size={40} />,
    github: <FaGithub size={40} />
  };
  
  return iconMap[name] || <span>{name}</span>;
};
  


export default function SkillsSection() {
    const [hoveredSkill, setHoveredSkill] = useState(null);
    const [startIndex, setStartIndex] = useState(0);

    const skills = [
        { name: "HTML", icon: "html5", color: "bg-yellow-400", textColor: "text-black" },
        { name: "CSS", icon: "css3", color: "bg-blue-500", textColor: "text-white" },
        { name: "Tailwind CSS", icon: "tailwind", color: "bg-cyan-500", textColor: "text-white" },
        { name: "JavaScript", icon: "javascript", color: "bg-yellow-400", textColor: "text-black" },
        { name: "React", icon: "react", color: "bg-cyan-400", textColor: "text-black" },
        { name: "Node.js", icon: "nodejs", color: "bg-green-600", textColor: "text-white" },
        { name: "Express.js", icon: "express", color: "bg-gray-600", textColor: "text-white" },
        { name: "MySQL", icon: "mysql", color: "bg-blue-900", textColor: "text-orange-300" },
        { name: "MongoDB", icon: "mongodb", color: "bg-green-800", textColor: "text-white" },
        { name: "Solidity", icon: "solidity", color: "bg-orange-600", textColor: "text-white" },
    ];

    const visibleSkills = 6;
    const maxStartIndex = Math.max(0, skills.length - visibleSkills);

    const nextSkills = () => {
        setStartIndex(prev => Math.min(prev + 1, maxStartIndex));
    };

    const prevSkills = () => {
        setStartIndex(prev => Math.max(prev - 1, 0));
    };


    return (
        <div className="container mx-auto px-4 py-20 md:py-32">
            <div className="flex flex-col items-center mb-12">
                <div className="bg-[#1a1e2a] px-8 py-2 rounded-full mb-8">
                    <h2 className="text-2xl font-bold">Skills</h2>
                </div>
            </div>

            <div className="flex items-center justify-center gap-10">
                <button
                    onClick={prevSkills}
                    className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
                >
                    <ChevronLeft size={24} />
                </button>

                <div className="flex gap-20 w-full justify-center">
                    {skills.slice(startIndex, startIndex + visibleSkills).map((skill) => (
                        <div
                            key={skill.name}
                            className="flex flex-col items-center transition-all duration-300 transform hover:scale-110"
                            onMouseEnter={() => setHoveredSkill(skill.name)}
                            onMouseLeave={() => setHoveredSkill(null)}
                        >
                            <div
                                className={`w-20 h-20 ${skill.color} flex items-center justify-center rounded-md mb-2 shadow-lg transition-all duration-300 ${hoveredSkill === skill.name ? 'scale-110' : ''}`}
                            >
                                <span className={`text-2xl font-bold ${skill.textColor}`}>
                                    <StackIcon name={skill.icon} />
                                </span>
                            </div>
                            <span className="text-sm font-medium opacity-90">{skill.name}</span>
                        </div>
                    ))}
                </div>

                <button
                    onClick={nextSkills}
                    className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
                >
                    <ChevronRight size={24} />
                </button>
            </div>

            <div className="flex justify-center mt-4 gap-1">
                {Array.from({ length: Math.min(skills.length - visibleSkills + 1, skills.length) }).map((_, idx) => (
                    <div
                        key={idx}
                        className={`w-2 h-2 rounded-full ${startIndex === idx ? 'bg-white' : 'bg-gray-600'} transition-colors duration-300`}
                        onClick={() => setStartIndex(idx)}
                    />
                ))}
            </div>
        </div>
    );
}