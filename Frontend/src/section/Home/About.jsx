import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import kartikImg from "../../assets/kartik.png";


export default function AboutSection() {
  const container = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });
  
  const x = useTransform(scrollYProgress, [0, 1], [0, -400]);

  return (
    <section 
      ref={container}
      className="relative flex flex-col md:flex-row items-center justify-between gap-16 py-40 px-6 md:px-24 bg-[#121212] text-white overflow-hidden"
    >
      <motion.h3 
        style={{ x }}
        className="absolute top-1/2 left-0 -translate-y-1/2 font-bebas text-[180px] md:text-[300px] text-white/[0.03] whitespace-nowrap pointer-events-none z-0"
      >
        KARTIK KUMAR KURMI • VISUAL DESIGNER • KARTIK KUMAR KURMI
      </motion.h3>

      {/* 2. LEFT CONTENT */}
      <div className="flex-1 z-10 space-y-8">
        <h2 className="font-bebas text-6xl md:text-8xl leading-[0.9] uppercase">
          Let’s get <br /> 
          <span className="text-[#FF8A50]">know me</span> closer
        </h2>
        
        <p className="text-gray-400 leading-relaxed max-w-md text-lg font-light">
          Aaronn is a New York-based visual designer focusing on branding and visual identity.
          Her portfolio showcases her wide range of work, spanning books, posters and web design.
        </p>

        <Link to="/about">
          <button className="group relative flex items-center gap-4 bg-[#FF8A50] text-black font-bebas text-xl py-4 px-10 rounded-full overflow-hidden transition-transform" style={{ transform: 'scale(1)' }} onHover={(e) => e.target.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>
            <span className="relative z-10">Discover More →</span>
          </button>
        </Link>
      </div>

      {/* 3. RIGHT IMAGE CONTAINER */}
      <div className="flex-1 flex justify-center md:justify-end relative z-10">
        <div className="relative w-[320px] h-[320px] md:mr-12 group">
          <div className="relative z-20 w-[320px] h-[320px] rounded-full overflow-hidden border-4 border-[#121212] shadow-2xl">
            <img
              src={kartikImg}
              alt="Kartik"
              className="w-full h-full object-cover grayscale contrast-125 brightness-90 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-[#FF8A50] rounded-[2.5rem] z-10"></div>
          <div className="absolute -top-4 -right-4 bg-[#FF8A50] text-black font-bebas px-6 py-2 rounded-full z-30 shadow-lg transform -rotate-12">
            EST. 2026
          </div>
        </div>
      </div>
    </section>
  );
}