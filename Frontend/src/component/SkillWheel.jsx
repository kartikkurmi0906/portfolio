import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const skills = [
  { name: 'JavaScript', color: '#F7DF1E', icon: 'JS', desc: 'Versatile language for web interactivity.' },
  { name: 'React', color: '#61DAFB', icon: 'RE', desc: 'Library for building component-based UIs.' },
  { name: 'Node', color: '#339933', icon: 'NO', desc: 'JavaScript runtime for server-side code.' },
  { name: 'Tailwind', color: '#06B6D4', icon: 'TA', desc: 'Utility-first CSS framework for rapid styling.' },
  { name: 'PostgreSQL', color: '#336791', icon: 'PO', desc: 'Advanced open-source relational database.' },
  { name: 'Git', color: '#F05032', icon: 'GI', desc: 'Version control system for tracking code changes.' },
];

const SkillOrbit = () => {
  const [activeSkill, setActiveSkill] = useState(null);
  const isPaused = !!activeSkill;
  
  // Adjusted for a cleaner hemisphere look
  const RADIUS = 350; 
  const ICON_SIZE = 56;

  return (
    <section className="relative h-[600px] w-full bg-[#0a0a0a] flex items-end justify-center overflow-hidden border-t border-white/5">
      
      {/* 1. Background Glow & Grid */}
      <div className="absolute bottom-[-10%] w-[800px] h-[400px] bg-[#FF8A50]/10 blur-[120px] rounded-full pointer-events-none" />
      
      {/* 2. Semi-Circle Orbit Rings */}
      <div className="absolute border-t border-white/10 rounded-full w-[500px] h-[500px] translate-y-1/2 pointer-events-none" />
      <div className="absolute border-t border-white/5 rounded-full w-[700px] h-[700px] translate-y-1/2 pointer-events-none" />

      {/* 3. Central Content (Positioned at the bottom center) */}
      <div className="absolute bottom-10 z-20 text-center pointer-events-none flex flex-col items-center w-[400px]">
        <AnimatePresence mode="wait">
          {!activeSkill ? (
            <motion.div key="default" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
              <span className="font-bebas text-[#FF8A50] tracking-[0.4em] text-sm uppercase opacity-50">// System.Capabilities</span>
              <h2 className="text-white text-7xl font-bebas uppercase leading-none mt-2">Skills</h2>
            </motion.div>
          ) : (
            <motion.div key={activeSkill.name} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}>
              <h2 className="text-4xl font-bebas uppercase tracking-tight" style={{ color: activeSkill.color }}>{activeSkill.name}</h2>
              <p className="text-gray-400 font-light text-sm mt-2 leading-relaxed max-w-[280px] mx-auto">{activeSkill.desc}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 4. The Hemisphere Orbit */}
      <motion.div
        animate={{ rotate: isPaused ? undefined : [0, -40, 0] }} // Gentle swing instead of 360 rotation
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-full h-full flex items-center justify-center translate-y-[50%]"
      >
        {skills.map((skill, index) => {
          // MATH FIX: (index / (total-1)) * Math.PI creates a 180 degree spread
          // We add Math.PI to start from the left side (180 deg) to the right (360 deg)
          const angle = Math.PI + (index / (skills.length - 1)) * Math.PI;
          const x = RADIUS * Math.cos(angle);
          const y = RADIUS * Math.sin(angle);
          const isActive = activeSkill?.name === skill.name;

          return (
            <motion.div
              key={skill.name}
              onMouseEnter={() => setActiveSkill(skill)}
              onMouseLeave={() => setActiveSkill(null)}
              className="absolute rounded-xl flex items-center justify-center border border-white/10 cursor-pointer backdrop-blur-md z-30 group"
              style={{
                width: ICON_SIZE,
                height: ICON_SIZE,
                left: `calc(50% + ${x}px - ${ICON_SIZE / 2}px)`,
                top: `calc(50% + ${y}px - ${ICON_SIZE / 2}px)`,
                backgroundColor: 'rgba(15, 15, 15, 0.9)',
              }}
              animate={{ 
                scale: isActive ? 1.3 : 1,
                borderColor: isActive ? skill.color : "rgba(255,255,255,0.1)",
                boxShadow: isActive ? `0 0 30px ${skill.color}55` : "none"
              }}
            >
              <span className="text-xs font-bebas text-white group-hover:text-white transition-colors">{skill.icon}</span>
              
              {/* Connector line to center (optional tech detail) */}
              {isActive && (
                 <motion.div 
                   initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                   className="absolute h-[350px] w-[1px] bg-gradient-to-t from-transparent via-[#FF8A50]/20 to-[#FF8A50]/50 origin-bottom"
                   style={{ bottom: '100%', transform: `rotate(0deg)` }}
                 />
              )}
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default SkillOrbit;