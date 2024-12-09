"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiIpfs,
  SiSolidity,
  SiWeb3Dotjs,
  SiNestjs,
} from "react-icons/si";
import { FaRust, FaEthereum } from "react-icons/fa";

interface Skill {
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  color: string;
}

const Skills: React.FC = () => {
  const [skills] = useState<Skill[]>([
    { name: "Solidity", icon: SiSolidity, color: "text-orange-700" },
    { name: "Web3.js", icon: SiWeb3Dotjs, color: "text-blue-500" },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
    { name: "Rust", icon: FaRust, color: "text-blue-500" },
    { name: "React", icon: SiReact, color: "text-cyan-400" },
    { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
    { name: "IPFS", icon: SiIpfs, color: "text-orange-500" },
    { name: "Nest.js", icon: SiNestjs, color: "text-blue-600" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-700" },
    { name: "Ethereum", icon: FaEthereum, color: "text-blue-500" },
  ]);

  return (
    <section
      id="skills"
      className="relative md:py-28 py-32 xl:px-72 text-white overflow-hidden w-full"
    >
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl lg:text-7xl font-bold mb-12 text-center bg-gradient-to-r from-[#f1f5f966] via-[#f1f5f9] via-51% to-[#f1f5f966] text-transparent bg-clip-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Tech <span className="text-blue-500">Stack</span>
        </motion.h2>
        <div className="grid grid-cols-3 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Define types for SkillCard component props
interface SkillCardProps {
  skill: Skill;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  return (
    <motion.div
      className="relative flex flex-col hover:bg-blue-900 items-center justify-center p-6 rounded-xl overflow-hidden cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative z-10">
        <skill.icon className={`text-6xl ${skill.color} mb-4`} />
        <h3 className="text-sm md:text-lg font-semibold text-center ">
          {skill.name}
        </h3>
      </div>
    </motion.div>
  );
};

export default Skills;
