import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ProjectHero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Text moves left and right on scroll
  const xLeft = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const xRight = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-screen flex flex-col items-center justify-center bg-[#0a0a0a] overflow-hidden">
      {/* Background Matrix Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`, backgroundSize: '30px 30px' }} />

      <motion.div style={{ opacity }} className="relative z-10 flex flex-col items-center">
        {/* Animated Status Tag */}
        <div className="flex items-center gap-3 mb-8 border border-white/10 px-4 py-1 rounded-full bg-white/5 backdrop-blur-sm">
          <div className="w-1.5 h-1.5 rounded-full bg-[#FF8A50] animate-pulse shadow-[0_0_8px_#FF8A50]" />
          <span className="text-gray-400 font-mono text-[9px] uppercase tracking-[0.4em]">Index_v.2026_Live</span>
        </div>

        {/* Splitting Text Effect */}
        <div className="overflow-visible text-center">
          <motion.h2 style={{ x: xLeft }} className="text-white text-8xl md:text-[12vw] font-black uppercase italic leading-none tracking-tighter">
            PROJECTS
          </motion.h2>
          <motion.h2 style={{ x: xRight }} className="text-[#FF8A50] text-8xl md:text-[12vw] font-black uppercase italic leading-none tracking-tighter mt-[-2vw] opacity-80">
            & DEPLOYMENTS
          </motion.h2>
        </div>

        <motion.p className="mt-12 text-gray-600 font-mono text-[10px] uppercase tracking-[0.5em] text-center max-w-lg">
          // Inspecting architecture and visual impact //
        </motion.p>
      </motion.div>

      {/* Decorative Bottom Bar */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FF8A50]/20 to-transparent" />
    </section>
  );
};
export default ProjectHero;