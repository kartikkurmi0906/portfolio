import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import kartikImg from "../../assets/kartik.png";

const AboutHero = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  // Background text moves right as you scroll down
  const x = useTransform(scrollYProgress, [0, 1], [900, -1000]);

  return (
    <section
      ref={container}
      className="relative min-h-[90vh] flex flex-col md:flex-row items-center justify-between gap-12 py-32 px-6 md:px-24 bg-[#0a0a0a] text-white overflow-hidden"
    >
      {/* 1. SCROLLING BACKGROUND TEXT */}
      <motion.h3
        style={{ x }}
        className="absolute  top-1/2 left-0 -translate-y-1/2 font-bebas font-black text-[150px] md:text-[280px] text-white/[0.02] whitespace-nowrap pointer-events-none z-0 uppercase"
      >
        KARTIK KUMAR KURMI • DEVELOPER • KARTIK KUMAR KURMI • DESIGNER
      </motion.h3>

      {/* 2. LEFT: PHOTO CONTAINER */}
      <div className="flex-1 flex justify-center md:justify-start relative z-10 order-2 md:order-1">
        <div className="relative w-[300px] h-[380px] group">
          {/* Theme Color Frame */}
          <div className="absolute -inset-4 border-2 border-[#FF8A50]/30 rounded-2xl rotate-6 group-hover:rotate-0 transition-transform duration-500"></div>
          
          <div className="relative z-20 w-full h-full rounded-2xl overflow-hidden border border-white/10 bg-[#111]">
            <img
              src={kartikImg}
              alt="Kartik"
              className="w-full h-full object-cover -scale-x-100 grayscale contrast-125 brightness-75 group-hover:grayscale-0 group-hover:brightness-100  transition-all duration-700"
            />
          </div>

          {/* Floating Badge */}
          <div className="absolute -top-6 -left-6 bg-[#FF8A50] text-black font-bold px-6 py-3 rounded-xl z-30 shadow-[0_10px_30px_rgba(255,138,80,0.3)] transform -rotate-12">
            EST. 2026
          </div>
        </div>
      </div>

      {/* 3. RIGHT: CONTENT */}
      <div className="flex-1 z-10 space-y-8 order-1 md:order-2">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-6xl md:text-8xl font-black leading-[0.9] uppercase tracking-tighter">
            THE ARCHITECT <br />
            <span className="text-[#FF8A50]">BEHIND THE CODE</span>
          </h2>
        </motion.div>

        <p className="text-gray-400 leading-relaxed max-w-md text-lg font-light">
          Sitting at the intersection of data and design. I build high-performance 
          web systems using <span className="text-white italic font-medium">React</span> and 
          <span className="text-white italic font-medium"> Data Analytics</span> to solve complex problems.
        </p>

        <div className="flex items-center gap-6 pt-4">
          <div className="h-[1px] w-20 bg-[#FF8A50]"></div>
          <span className="text-[#FF8A50] font-mono text-sm tracking-widest uppercase animate-pulse">
            Scroll to explore
          </span>
        </div>
        {/* Decorative detail */}
        <div className="flex items-center gap-4 opacity-30">
          <div className="h-[1px] w-12 bg-white"></div>
          <span className="text-xs uppercase tracking-[0.4em]">Full Stack System</span>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;