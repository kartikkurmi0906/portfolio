import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  SiTailwindcss, SiPostgresql,
  SiNumpy, SiPandas, SiReact, SiHtml5, SiCss3,
  SiJavascript, SiNodedotjs, SiMysql, SiPhpmyadmin, SiMongodb, SiGit, SiGithub
} from 'react-icons/si';
import { FaChartBar } from 'react-icons/fa';

const skills = [
  { name: 'JavaScript', color: '#F7DF1E', icon: <SiJavascript />, desc: 'Versatile language for web interactivity and logic.' },
  { name: 'React', color: '#61DAFB', icon: <SiReact />, desc: 'Library for building component-based user interfaces.' },
  { name: 'Node.js', color: '#339933', icon: <SiNodedotjs />, desc: 'JavaScript runtime for server-side execution.' },
  { name: 'Tailwind', color: '#06B6D4', icon: <SiTailwindcss />, desc: 'Utility-first CSS framework for rapid UI development.' },
  { name: 'HTML5', color: '#E34F26', icon: <SiHtml5 />, desc: 'Core structural logic for web interfaces.' },
  { name: 'CSS3', color: '#1572B6', icon: <SiCss3 />, desc: 'Advanced styling and responsive design.' },
  { name: 'PostgreSQL', color: '#336791', icon: <SiPostgresql />, desc: 'Advanced open-source relational database system.' },
  { name: 'MySQL', color: '#4479A1', icon: <SiMysql />, desc: 'Relational database management and SQL.' },
  { name: 'PHPMyAdmin', color: '#6C78AF', icon: <SiPhpmyadmin />, desc: 'Web-based administration for MySQL/MariaDB.' },
  { name: 'MongoDB', color: '#47A248', icon: <SiMongodb />, desc: 'NoSQL document-based database system.' },
  { name: 'Git', color: '#F05032', icon: <SiGit />, desc: 'Distributed version control for tracking code changes.' },
  { name: 'GitHub', color: '#ffffff', icon: <SiGithub />, desc: 'Cloud-based hosting for git repositories.' },
  { name: 'NumPy', color: '#013243', icon: <SiNumpy />, desc: 'Scientific computing and n-dimensional arrays.' },
  { name: 'Pandas', color: '#150458', icon: <SiPandas />, desc: 'High-performance data manipulation and analysis.' },
  { name: 'Matplotlib', color: '#11557C', icon: <FaChartBar />, desc: 'Static, animated, and interactive visualizations.' },
];

export default function SkillsSection() {
  const [isPaused, setIsPaused] = useState(false);
  const [hoverSkill, setHoverSkill] = useState(null);

  // BOOSTED SIZES
  const RADIUS = 380;     // Increased radius so icons don't bunch up
  const ICON_SIZE = 80;    // Increased from 54px to 80px
  const RING_SIZE = 760;   // Matches (RADIUS * 2)

  return (
    <section className="bg-[#0a0a0a] min-h-screen pt-20 pb-10 px-8 md:px-20 overflow-visible relative flex mb-[-120px] ">

      {/* 1. HEADER */}
      <div className="max-w-3xl relative z-10">
        <h2 className="text-white text-6xl md:text-7xl font-bold mb-4 tracking-tighter uppercase font-bebas">Technical <span style={{ color: '#FF8A50' }}>Stack</span></h2>
        <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 max-w-xl font-medium uppercase tracking-[0.2em]">
          // System Capabilities _
        </p>
      </div>

      {/* 2. THE HEMISPHERE CONTAINER */}
      <div className="relative flex-1 w-full flex items-center justify-center mt-32">

        {/* Central Info Display */}
        <div className="absolute z-40 text-center md:text-left flex flex-col md:flex-row items-center gap-10 pointer-events-none translate-y-[-200px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={hoverSkill ? hoverSkill.name : 'default'}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.2 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col md:flex-row items-center gap-12"
            >
              {hoverSkill ? (
                <>
                  {/* MASSIVE CENTER ICON */}
                  <div className="text-9xl md:text-[90px] transition-all translate-y-[200px] translate-x-[50px] duration-500 drop-shadow-[0_0_50px_rgba(255,255,255,0.1)]"
                    style={{ color: hoverSkill.color }}>
                    {hoverSkill.icon}
                  </div>
                  <div className="max-w-md translate-y-[200px] translate-x-[50px] ">
                    <h3 className="text-white text-2xl md:text-3xl font-bold uppercase tracking-tighter leading-none" style={{ color: hoverSkill.color }}>
                      {hoverSkill.name}
                    </h3>
                    <p className="text-gray-500 text-lg mt-4 uppercase tracking-[0.3em] font-light italic">
                      {hoverSkill.desc}
                    </p>
                  </div>
                </>
              ) : (
                <div className="text-white/5 text-5xl font-black uppercase translate-y-[170px] tracking-widest italic animate-pulse">
                  My Skills <br /> Orbit
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* HEMISPHERE CLIP MASK */}
        <div
          className="relative flex items-center justify-center overflow-visible "
          style={{
            width: '100%',
            height: `${RADIUS}px`, // Limits the container height to the top half
            marginTop: '-100px',     // Adjust this to move the whole orbit up/down
            clipPath: 'polygon(-20% -30%, 120% -30%, 120% 100%, -20% 100%)'
          }}
        >
          <style>
            {`@keyframes spin { from {transform: rotate(0deg);} to {transform: rotate(360deg);} }`}
          </style>

          {/* THE ROTATING WHEEL - Now using absolute to stay centered */}
          <div
            style={{
              animation: 'spin 60s linear infinite',
              animationPlayState: isPaused ? 'paused' : 'running',
              width: `${RING_SIZE}px`,
              height: `${RING_SIZE}px`,
              position: 'absolute',
              top: 0, // Keeps the center of the circle aligned with the top of this box
            }}
            className="flex items-center justify-center origin-center "
          >
            {/* The Visual Arch Ring */}
            <div className="absolute inset-0 border border-white/5 rounded-full pointer-events-none shadow-[inset_0_0_50px_rgba(255,255,255,0.02)]" />

            {skills.map((skill, index) => {
              const angle = (index / skills.length) * Math.PI * 2;
              const x = RADIUS * Math.cos(angle);
              const y = RADIUS * Math.sin(angle);
              const isActive = hoverSkill?.name === skill.name;

              return (
                <div
                  key={index}
                  className={`absolute transition-all duration-500 ${isActive ? 'z-50' : 'z-30'}`}
                  style={{
                    width: ICON_SIZE,
                    height: ICON_SIZE,
                    left: `calc(50% + ${x}px - ${ICON_SIZE / 2}px)`,
                    top: `calc(50% + ${y}px - ${ICON_SIZE / 2}px)`,
                  }}
                >
                  <div
                    style={{
                      animation: 'spin 60s linear infinite reverse',
                      animationPlayState: isPaused ? 'paused' : 'running',
                    }}
                    onMouseEnter={() => { setHoverSkill(skill); setIsPaused(true); }}
                    onMouseLeave={() => { setHoverSkill(null); setIsPaused(false); }}
                    className="w-full h-full"
                  >
                    <div
                      className={`w-full h-full flex items-center justify-center border-2 transition-all duration-500 rounded-2xl cursor-pointer ${isActive ? 'rotate-[360deg]' : 'bg-[#0f0f0f]/80 border-[white/10] opacity-40 grayscale hover:grayscale-0'}`}
                      style={{
                        borderColor: isActive ? skill.color : 'rgba(255,255,255,0.1)',
                        boxShadow: isActive ? `0 0 50px 10px ${skill.color}55` : 'none',
                        color: isActive ? skill.color : 'white',
                        transform: isActive ? 'scale(1.2)' : 'scale(1)'
                      }}
                    >
                      <div className="text-4xl">
                        {skill.icon}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}



// import { motion } from "framer-motion";

// const SKILLS = [
//   { name: "React / Next.js", level: "90%", category: "Frontend" },
//   { name: "Tailwind CSS", level: "95%", category: "Design" },
//   { name: "Framer Motion", level: "85%", category: "Animation" },
//   { name: "Three.js", level: "60%", category: "3D Tech" },
//   { name: "Figma", level: "90%", category: "UI/UX" },
//   { name: "Node.js", level: "75%", category: "Backend" },
// ];

// export default function SkillsSection() {
//   return (
//     <section className="bg-[#0a0a0a] py-32 px-6 md:px-24 overflow-hidden border-t border-white/5">
//       {/* 1. Header with Tech Detail */}
//       <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
//         <div>
//           <span className="font-bebas text-[#FF8A50] tracking-[0.5em] text-sm italic">
//             // TECHNICAL_STACK
//           </span>
//           <h2 className="font-humane text-8xl md:text-[150px] text-white leading-none uppercase mt-4">
//             Core <span className="text-white/20">Capabilities</span>
//           </h2>
//         </div>
//         <div className="font-bebas text-white/40 text-right hidden md:block">
//           STATUS: OPTIMIZED <br />
//           LAST_UPDATE: FEB_2026
//         </div>
//       </div>

//       {/* 2. The Skills Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
//         {SKILLS.map((skill, index) => (
//           <motion.div 
//             key={index}
//             whileHover={{ backgroundColor: "rgba(255, 138, 80, 0.05)" }}
//             className="bg-[#0a0a0a] p-10 group relative overflow-hidden transition-colors"
//           >
//             {/* Background Number */}
//             <span className="absolute -right-4 -bottom-8 font-humane text-[120px] text-white/[0.03] group-hover:text-[#FF8A50]/10 transition-colors">
//               0{index + 1}
//             </span>

//             <div className="relative z-10">
//               <p className="font-bebas text-[#FF8A50] text-xs tracking-widest mb-2">
//                 {skill.category}
//               </p>
//               <h3 className="font-bebas text-3xl text-white group-hover:translate-x-2 transition-transform duration-300">
//                 {skill.name}
//               </h3>
              
//               {/* Futuristic Progress Bar */}
//               <div className="mt-6 w-full h-[2px] bg-white/5 relative overflow-hidden">
//                 <motion.div 
//                   initial={{ x: "-100%" }}
//                   whileInView={{ x: "0%" }}
//                   transition={{ duration: 1, delay: index * 0.1 }}
//                   style={{ width: skill.level }}
//                   className="absolute inset-0 bg-[#FF8A50] shadow-[0_0_10px_#FF8A50]"
//                 />
//               </div>
//               <div className="flex justify-between mt-2 font-bebas text-[10px] text-white/30 tracking-tighter">
//                 <span>0%</span>
//                 <span>{skill.level}</span>
//               </div>
//             </div>

//             {/* Corner Tech Detail */}
//             <div className="absolute top-4 right-4 w-2 h-2 border-t border-r border-[#FF8A50] opacity-0 group-hover:opacity-100 transition-opacity" />
//           </motion.div>
//         ))}
//       </div>

//       {/* 3. Infinite Running Text (Optional Decor) */}
//       <div className="mt-32 flex whitespace-nowrap opacity-5 select-none pointer-events-none">
//         <motion.div 
//           animate={{ x: [0, -1000] }}
//           transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//           className="font-humane text-[200px] text-white uppercase"
//         >
//           INNOVATION • DESIGN • DEVELOPMENT • STRATEGY • INNOVATION • DESIGN • DEVELOPMENT • STRATEGY • 
//         </motion.div>
//       </div>
//     </section>
//   );
// }