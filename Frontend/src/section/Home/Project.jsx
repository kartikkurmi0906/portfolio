import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";


const PROJECTS = [
  { id: "01", title: "ABS WEbsite", category: "UI and Frontend", img: "/img1.jpg" },
  { id: "02", title: "DLAB Website", category: "Full Stack", img: "/img2.jpg" },
  { id: "03", title: "Weather Prediction", category: "API Syncronising", img: "/img4.jpg" },
  { id: "04", title: "Crop Disease Detection", category: "AI & Machine Learning", img: "/img3.jpg" },
];

export default function ProjectsSection() {
  const targetRef = useRef(null);
  // track progress throughout the section (start-to-start, end-to-end)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // Moves the entire gallery horizontally based on normalized scroll (0‑1)
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);


  return (
    <section ref={targetRef} className="relative h-[400vh] bg-[#080808]">
      {/* Sticky Container */}
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* BACKGROUND TECH OVERLAY */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none [background-image:radial-gradient(#FF8A50_0.5px,transparent_0.5px)] [background-size:30px_30px]" />
        
        <motion.div style={{ x }} className="flex gap-40 px-[10vw]">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group relative h-[60vh] w-[70vw] md:w-[45vw] flex-shrink-0">
              
              {/* Project ID - Vertical Tech Text */}
              <div className="absolute -left-12 top-0 h-full flex flex-col justify-between py-4">
                <span className="font-bebas text-brand-orange text-xl tracking-tighter">[{project.id}]</span>
                <div className="w-[1px] h-full bg-white/10 mx-auto my-4" />
                <span className="font-bebas text-white/20 text-sm rotate-180 [writing-mode:vertical-lr]">PROJECT.EXE</span>
              </div>

              {/* IMAGE CONTAINER with "Scanline" Effect */}
              <div className="relative h-full w-full overflow-hidden bg-[#121212] rounded-lg border border-white/5 group-hover:border-brand-orange/50 transition-colors duration-500">
                <img
                  src={project.img}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                
                {/* Futuristic Overlay: Gradient & Scanline */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] pointer-events-none" />
              </div>

              {/* FLOATING TEXT - Tech Style */}
              <div className="absolute -bottom-10 left-0 w-full">
                <h3 className="font-bebas text-[100px] md:text-[100px] leading-none text-white uppercase group-hover:text-brand-orange transition-colors">
                  {project.title}
                </h3>
                <div className="flex justify-between items-center mt-[-20px] px-2">
                  <p className="font-bebas text-white/40 tracking-[0.3em] text-sm italic">{project.category}</p>
                  <button className="font-bebas text-brand-orange text-xs border-b border-brand-orange hover:pb-2 transition-all cursor-pointer">
                    VIEW_DATA
                  </button>
                </div>
              </div>

            </div>
          ))}
        </motion.div>

        {/* PROGRESS BAR - Bottom */}
        <div className="absolute bottom-10 left-10 right-10 h-[1px] bg-white/10">
          <motion.div 
            style={{ scaleX: scrollYProgress }} 
            className="h-full bg-brand-orange origin-left w-full" 
          />
        </div>
        
      </div>
    </section>
  );
}