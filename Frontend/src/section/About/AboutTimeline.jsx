import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';


const experiences = [
  { year: "2023", title: "Data Core", company: "Learning Phase", desc: "Built the foundation in analytical mathematics and Python data structures." },
  { year: "2024", title: "Frontend", company: "Learning Phase", desc: "Shifted focus to high-end UI/UX using React and the Framer Motion ecosystem." },
  { year: "2025", title: "Frontend Intern", company: "ABS SOFTECH", desc: "Architecting server-side logic and database schemas for scalable apps." },
  { year: "2026", title: "React Developer", company: "Future", desc: "Currently optimizing systems for maximum performance and visual impact." }
];

const AboutTimeline = () => {
  const targetRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Adjust this percentage: if it scrolls too far, decrease -80%. 
  // If it doesn't show the last card, increase it.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);

  return (
    // Height 300vh provides the "distance" of the scroll
    <section ref={targetRef} className="relative h-[200vh] bg-[#0a0a0a]">
      
      {/* STICKY wrapper - This must stay locked to the top */}
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        
        {/* Background Ghost Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none">
          <h2 className="text-[30vw] font-black uppercase font-bebas">HISTORY</h2>
        </div>

        <motion.div style={{ x }} className="flex gap-20 px-24">
          {experiences.map((exp, index) => (
            <div key={index} className="relative flex-shrink-0 w-[450px] group">
              
              {/* Year & Progress Line */}
              <div className="flex items-center gap-6 mb-12">
                <span className="text-[#FF8A50] font-bebas text-6xl tracking-tighter italic">
                  {exp.year}
                </span>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-[#FF8A50] to-transparent opacity-30 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content Box */}
              <div className="space-y-4">
                <h3 className="text-white text-4xl font-black uppercase tracking-tighter leading-none">
                  {exp.title}
                </h3>
                <div className="inline-block px-3 py-1 border border-[#FF8A50]/30 text-[#FF8A50] font-mono text-[10px] uppercase tracking-widest">
                  {exp.company}
                </div>
                <p className="text-gray-500 text-lg leading-relaxed max-w-[380px] font-light">
                  {exp.desc}
                </p>
              </div>
            </div>
          ))}
          
          {/* Buffer div to ensure the last card stays in view */}
          <div className="flex-shrink-0 w-[300px]" />
        </motion.div>

        {/* BOTTOM PROGRESS TRACKER */}
        <div className="absolute bottom-16 left-24 right-24 h-[2px] bg-white/5">
          <motion.div 
            style={{ scaleX: scrollYProgress }} 
            className="h-full bg-[#FF8A50] origin-left shadow-[0_0_15px_#FF8A50]" 
          />
        </div>
      </div>
    </section>
  );
};

export default AboutTimeline;