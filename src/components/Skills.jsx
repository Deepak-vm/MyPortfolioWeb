import { useState } from 'react';
import {
    FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGithub, FaPython, FaJava
} from 'react-icons/fa';
import {
    SiTailwindcss, SiJavascript, SiExpress,
    SiMysql, SiMongodb, SiSolidity, SiTypescript,
    SiNextdotjs, SiFirebase, SiDocker,
    SiVercel, SiNetlify, SiGit
} from 'react-icons/si';


const StackIcon = ({ name, size = 32 }) => {
    const iconMap = {
        html5: <FaHtml5 size={size} className="text-orange-500" />,
        css3: <FaCss3Alt size={size} className="text-blue-500" />,
        tailwind: <SiTailwindcss size={size} className="text-cyan-400" />,
        javascript: <SiJavascript size={size} className="text-yellow-400" />,
        typescript: <SiTypescript size={size} className="text-blue-400" />,
        react: <FaReact size={size} className="text-cyan-400" />,
        nextjs: <SiNextdotjs size={size} className="text-white" />,
        nodejs: <FaNodeJs size={size} className="text-green-500" />,
        express: <SiExpress size={size} className="text-gray-300" />,
        python: <FaPython size={size} className="text-blue-400" />,
        java: <FaJava size={size} className="text-red-500" />,
        mysql: <SiMysql size={size} className="text-blue-600" />,
        mongodb: <SiMongodb size={size} className="text-green-500" />,
        firebase: <SiFirebase size={size} className="text-yellow-500" />,
        docker: <SiDocker size={size} className="text-blue-400" />,
        vercel: <SiVercel size={size} className="text-white" />,
        netlify: <SiNetlify size={size} className="text-cyan-400" />,
        git: <SiGit size={size} className="text-orange-500" />,
        github: <FaGithub size={size} className="text-white" />,
        solidity: <SiSolidity size={size} className="text-gray-400" />
    };

    return iconMap[name] || <span className="text-white">{name}</span>;
};



export default function SkillsSection() {
    const [hoveredSkill, setHoveredSkill] = useState(null);

    const skillCategories = {
        "Frontend": [
            { name: "JavaScript", icon: "javascript" },
            { name: "React", icon: "react" },
            { name: "Tailwind CSS", icon: "tailwind" }
        ],
        "Backend": [
            { name: "Node.js", icon: "nodejs" },
            { name: "Express.js", icon: "express" },
        ],
        "Database": [
            { name: "MongoDB", icon: "mongodb" },
            { name: "MySQL", icon: "mysql" },
        ],
        "Tools & Others": [
            { name: "GitHub", icon: "github" },
            { name: "Docker", icon: "docker" },
            { name: "Solidity", icon: "solidity" }
        ]
    };

    return (
        <section id="skills" className="py-8 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            <div className="max-w-5xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-8">
                    <div className="inline-block">
                        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-3">
                            Skills & Technologies
                        </h2>
                        <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
                    </div>
                    <p className="text-gray-400 mt-3 text-base">Technologies I work with</p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {Object.entries(skillCategories).map(([category, skills]) => (
                        <div key={category} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-5 border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300">
                            <h3 className="text-lg font-semibold text-cyan-400 mb-4 flex items-center">
                                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                                {category}
                            </h3>

                            <div className="grid grid-cols-3 gap-3">
                                {skills.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className="group relative bg-slate-700/30 rounded-lg p-3 border border-slate-600/30 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer"
                                        onMouseEnter={() => setHoveredSkill(skill.name)}
                                        onMouseLeave={() => setHoveredSkill(null)}
                                    >
                                        <div className="flex flex-col items-center text-center">
                                            <div className="mb-2 transform group-hover:scale-110 transition-transform duration-300">
                                                <StackIcon name={skill.icon} size={28} />
                                            </div>
                                            <h4 className="text-white text-xs font-medium group-hover:text-cyan-300 transition-colors">
                                                {skill.name}
                                            </h4>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Info */}
                <div className="mt-8 text-center">
                    <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-xl p-4 border border-slate-600/30">
                        <p className="text-gray-300 text-base">
                            Constantly learning and exploring new technologies to build amazing digital experiences
                        </p>
                        <div className="flex justify-center mt-3 space-x-2">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-75"></div>
                            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-150"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}