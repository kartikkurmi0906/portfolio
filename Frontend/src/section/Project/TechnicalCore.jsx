import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaAws, FaDocker, FaDatabase, FaGithub, FaFigma } from 'react-icons/fa';
import { SiTailwindcss, SiFramer, SiTypescript, SiMongodb, SiPostman, SiVite } from 'react-icons/si';

const SkillIcon = ({ icon: Icon, name }) => (
  <div className="flex flex-col items-center justify-center min-w-[160px] md:min-w-[200px] group">
    <div className="relative w-20 h-20 md:w-24 md:h-24 flex items-center justify-center rounded-2xl bg-[#111] border border-white/5 group-hover:border-[#FF8A50]/50 transition-all duration-500 overflow-hidden">
      {/* Ghost Icon in Background */}
      <Icon className="absolute text-5xl opacity-[0.03] group-hover:opacity-10 scale-150 transition-all" />
      
      {/* Main Icon */}
      <Icon className="text-3xl md:text-4xl text-gray-500 group-hover:text-[#FF8A50] group-hover:scale-110 transition-all duration-500" />
      
      {/* Scanning Line Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FF8A50]/10 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000" />
    </div>
    <span className="mt-4 font-mono text-[10px] uppercase tracking-[0.3em] text-gray-600 group-hover:text-white transition-colors">
      {name}
    </span>
  </div>
);

const TechnicalToolkit = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Mapping scroll to horizontal movement
  const xRaw = useTransform(scrollYProgress, [0, 1], [200, -1000]);
  const x = useSpring(xRaw, { stiffness: 50, damping: 20 });

  const skills = [
      { icon: FaPython, name: "Python" },
      { icon: FaNodeJs, name: "Node.js" },
      { icon: SiTailwindcss, name: "Tailwind" },
      { icon: FaReact, name: "React" },
    { icon: SiMongodb, name: "MongoDB" },
    { icon: FaGithub, name: "Git" },
    { icon: SiVite, name: "Vite" },
    { icon: SiPostman, name: "APIs" },
  ];

  return (
    <section ref={containerRef} className="bg-[#0a0a0a] py-40 overflow-hidden relative">
      
      {/* SECTION HEADER */}
      <div className="max-w-7xl mx-auto px-6 md:px-24 mb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex flex-col gap-2"
        >
          <h2 className="text-white text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none">
            Tech <span className="text-[#FF8A50]">Stack</span>
          </h2>
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-12 bg-[#FF8A50]" />
            <p className="text-gray-500 font-mono text-[9px] uppercase tracking-[0.4em]">Integrated_Development_Environment</p>
          </div>
        </motion.div>
      </div>

      {/* HORIZONTAL SCROLLING TRACK */}
      <div className="relative">
        {/* Top & Bottom "Data Lines" */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <motion.div 
          style={{ x }} 
          className="flex py-12 gap-4 md:gap-10 whitespace-nowrap will-change-transform"
        >
          {/* We double the array for an infinite-feeling effect */}
          {[...skills, ...skills].map((skill, i) => (
            <SkillIcon key={i} icon={skill.icon} name={skill.name} />
          ))}
        </motion.div>
      </div>

      {/* BACKGROUND WATERMARK */}
      <div className="absolute left-1/2 bottom-10 -translate-x-1/2 pointer-events-none opacity-[0.02] select-none text-[15vw] font-black text-white uppercase font-bebas tracking-widest whitespace-nowrap">
        CAPABILITIES • SYSTEM • CORE • ENGINE
      </div>
    </section>
  );
};

export default TechnicalToolkit;