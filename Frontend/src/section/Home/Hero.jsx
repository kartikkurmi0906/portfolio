import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Magnetic from "../../component/Magnetic";

export default function Hero() {
  const container = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"] // Tracks scroll through the whole section
  });

  // 1. Text zooms in as you scroll
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]); 
  
  // 2. Text fades out as it gets too close
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0]);

  // 3. The "Liquid Fill" effect - text starts hollow and fills up
  const clipPathValue = useTransform(scrollYProgress, [0, 0.5], ["inset(100% 0 0 0)", "inset(0% 0 0 0)"]);

  return (
    <section 
      ref={container}
      className="relative h-[300vh] bg-[#0a0a0a] text-white"
    >
      {/* STICKY WRAPPER: Keeps the text in the center while you scroll through the 300vh height */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        
        {/* TECH GRID BACKGROUND */}
        <div className="absolute inset-0 opacity-20 pointer-events-none [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:100px_100px]" />

        <motion.div 
          style={{ scale, opacity }}
          className="relative z-10 flex flex-col items-center"
        >
          {/* LAYER 1: The Wireframe (Hollow) */}
          <h1 className="font-humane text-[100px] md:text-[140px] uppercase leading-[0.8] text-transparent [-webkit-text-stroke:1px_rgba(255,138,80,0.3)] select-none">
            BUILDING DIGITAL <br />
            EXPERIENCES<br />
            THAT CONNECT
          </h1>

          {/* LAYER 2: The Fill (White + Orange) - Controlled by ClipPath */}
          <motion.h1 
            style={{ clipPath: clipPathValue }}
            className="absolute inset-0 font-humane text-[100px] md:text-[140px] uppercase leading-[0.8] select-none"
          >
            <span className="text-white">BUILDING DIGITAL</span><br />
            <span className="text-[#FF8A50]">EXPERIENCES</span><br />
            <span className="text-white">THAT CONNECT</span>
          </motion.h1>
        </motion.div>

        {/* 4. SCROLL PROGRESS LINE (Left Side) */}
        <div className="absolute left-10 bottom-20 h-32 w-[2px] bg-white/10 hidden md:block">
           <motion.div 
             style={{ scaleY: scrollYProgress }}
             className="w-full bg-[#FF8A50] origin-top h-full"
           />
        </div>

        {/* 5. INITIALIZE BUTTON */}
        <motion.div 
          // The opacity transformation needs both an input and output range;
          // without the output array it throws and can crash the component.
          style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [0, 1]) }}
          className="mt-20 relative z-20"
        >
            <Link to="/projects">
              <button className="font-bebas tracking-[0.3em] text-xs border border-[#FF8A50] px-8 py-3 hover:bg-[#FF8A50] hover:text-black transition-all">
                SEE PROJECTS
              </button>
            </Link>
        </motion.div>
      </div>
    </section>
  );
}