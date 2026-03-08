import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ContactHero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Perspective Zoom Logic
  const scale1 = useTransform(scrollYProgress, [0, 1], [1, 2.5]); 
  const scale2 = useTransform(scrollYProgress, [0, 1], [1, 4.5]); 
  
  // COLOR SHIFT: Changes from white outline to solid #FF8A50
  const textColor = useTransform(
    scrollYProgress, 
    [0, 0.2, 0.4], 
    ["rgba(255, 255, 255, 0)", "rgba(255, 138, 80, 1)", "rgba(255, 138, 80, 1)"]
  );
  
  const strokeColor = useTransform(
    scrollYProgress,
    [0, 0.5],
    ["rgba(255, 255, 255, 0.4)", "rgba(255, 138, 80, 1)"]
  );

  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.5, 0]);
  const blur = useTransform(scrollYProgress, [0, 0.8], [0, 10]);

  return (
    <section 
      ref={containerRef} 
      className="h-[180vh] bg-[#0a0a0a] relative"
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        
        {/* BACKGROUND PERSPECTIVE GRID */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
             style={{ 
               backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, 
               backgroundSize: '80px 80px',
               perspective: '1000px',
               transform: 'rotateX(60deg) translateY(-10%)'
             }} 
        />

        <motion.div 
          style={{ opacity, filter: `blur(${blur}px)` }}
          className="relative z-10 flex flex-col items-center text-center px-6"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[#FF8A50] font-mono text-[10px] uppercase tracking-[1em] mb-12 block font-bold"
          >
            // INITIATING_STREAM
          </motion.span>

          <div className="flex flex-col items-center">
            <motion.h1 
              style={{ scale: scale1 }}
              className="text-white text-7xl md:text-[10vw] font-black uppercase italic tracking-tighter leading-none"
            >
              GET IN
            </motion.h1>

            {/* TOUCH TEXT: Animates scale, color, and stroke simultaneously */}
            <motion.h1 
              style={{ 
                scale: scale2,
                color: textColor,
                WebkitTextStrokeColor: strokeColor,
              }}
              className="text-transparent text-7xl md:text-[12vw] font-black uppercase italic tracking-tighter leading-none mt-2 stroke-style"
            >
              TOUCH.
            </motion.h1>
          </div>

          <motion.div 
            initial={{ height: 0 }}
            animate={{ height: "120px" }}
            transition={{ delay: 1, duration: 1.5 }}
            className="w-[1px] bg-gradient-to-b from-[#FF8A50] via-[#FF8A50]/50 to-transparent mt-20"
          />
        </motion.div>
      </div>

      <style jsx>{`
        .stroke-style {
          -webkit-text-stroke-width: 1.5px;
        }
      `}</style>
    </section>
  );
};

export default ContactHero;