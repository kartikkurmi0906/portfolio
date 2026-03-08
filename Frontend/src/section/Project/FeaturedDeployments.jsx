import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';

const ProjectIndex = () => {
  const [projects, setProjects] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const containerRef = useRef(null);

  useEffect(() => {
    const fetchDeployments = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/projects');
        setProjects(res.data);
        setLoading(false);
      } catch (err) {
        console.error("FAILED_TO_INITIALIZE_PROJECT_STREAM");
        setLoading(false);
      }
    };
    fetchDeployments();
  }, []);

  if (loading) return (
    <div className="bg-[#0a0a0a] min-h-screen flex items-center justify-center font-mono text-[#FF8A50] tracking-[0.5em]">
      INITIALIZING_SYSTEM_INDEX...
    </div>
  );

  if (!loading && projects.length === 0) {
    return (
      <div className="bg-[#0a0a0a] min-h-screen flex items-center justify-center font-mono text-gray-400">
        NO_PROJECTS_FOUND
      </div>
    );
  }

  return (
    <section ref={containerRef} className="bg-[#0a0a0a] min-h-screen py-24 px-6 md:px-24 flex flex-col md:flex-row gap-10 relative">

      {/* 1. THE SCROLLABLE INDEX (Left Side) */}
      <div className="w-full md:w-1/2 space-y-2 z-10">
        <div className="mb-12">
          <h2 className="text-[#FF8A50] font-mono text-xs uppercase tracking-[0.6em] mb-2 font-bold">// PROJECT_DATABASE</h2>
          <div className="h-[1px] w-full bg-white/10" />
        </div>

        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            onMouseEnter={() => setHoveredIndex(i)}
            className="group py-6 border-b border-white/5 relative"
          >
            {/* WRAPPER LINK FOR REDIRECTION */}
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-between cursor-pointer w-full"
            >
              <div className="flex items-center gap-8">
                <span className="font-mono text-[10px] text-gray-600 group-hover:text-[#FF8A50] transition-colors">
                  0{i + 1}
                </span>
                <h3 className="text-white text-3xl md:text-5xl font-black uppercase italic tracking-tighter transition-all group-hover:translate-x-4 group-hover:text-[#FF8A50]">
                  {project.title}
                </h3>
              </div>

              <div className="hidden md:block text-right">
                <p className="text-gray-600 font-mono text-[10px] uppercase tracking-widest group-hover:text-white">
                  {project.year || "2026"}
                </p>
                <div className="w-0 group-hover:w-full h-[1px] bg-[#FF8A50] transition-all duration-500 mt-1" />
              </div>
            </a>
          </motion.div>
        ))}
      </div>

      {/* 2. THE STICKY HOLOGRAPHIC PREVIEW (Right Side) */}
      <div className="hidden md:block w-1/2 sticky top-24 h-[70vh] pointer-events-auto">
        <div className="relative w-full h-full rounded-2xl border border-white/10 bg-[#111] overflow-hidden">
          <AnimatePresence mode="wait">
            {projects.length > 0 && (
              <motion.div
                key={hoveredIndex}
                initial={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0"
              >
                {/* HOLOGRAPHIC IMAGE LINK */}
                <a 
                  href={projects[hoveredIndex].link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="absolute inset-0 group block overflow-hidden"
                >
                  <img 
                    src={projects[hoveredIndex].img_url || "https://images.unsplash.com/photo-1550751827-4bd374c3f58b"} 
                    className="w-full h-full object-cover opacity-40 grayscale transition-all duration-500 ease-out 
                               group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105" 
                    alt="Preview"
                  />
                  
                  {/* OVERLAYS (STILL VISIBLE INSIDE LINK) */}
                  <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-20 bg-[length:100%_2px,3px_100%]" />
                  
                  <div className="absolute bottom-12 left-12 z-30 pointer-events-none">
                    <div className="bg-[#FF8A50] text-black px-4 py-1 text-[10px] font-black uppercase italic mb-2 inline-block">
                      LIVE_SOURCE: {projects[hoveredIndex].title}
                    </div>
                    <h4 className="text-white text-4xl font-black uppercase italic tracking-tighter">
                      {projects[hoveredIndex].tech_stack}
                    </h4>
                  </div>
                </a>

                {/* VIEW-FINDER CORNERS (OUTSIDE LINK FOR CLEANER UI) */}
                <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-[#FF8A50]/40 pointer-events-none z-40" />
                <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-[#FF8A50]/40 pointer-events-none z-40" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ProjectIndex;