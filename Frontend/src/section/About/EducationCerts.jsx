import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import axios from 'axios';

const EducationCerts = () => {
  const containerRef = useRef(null);
  
  // --- LOGIC START: Fetching from PostgreSQL ---
  const [education, setEducation] = useState([]);
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    const fetchCredentials = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/credentials');
        // Filter into the two categories defined in your SQL 'type' column
        setEducation(res.data.filter(item => item.type === 'education'));
        setCertificates(res.data.filter(item => item.type === 'certificate'));
      } catch (err) {
        console.error("FAILED_TO_FETCH_CREDENTIALS", err);
      }
    };
    fetchCredentials();
  }, []);

  // Helper to handle both local Multer files and external links
  const getFileUrl = (url) => {
    if (!url) return "#";
    return url.startsWith('http') ? url : `http://localhost:5000${url}`;
  };
  // --- LOGIC END ---

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-800, 800]);
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

  return (
    <section ref={containerRef} className="bg-[#0a0a0a] py-40 px-6 md:px-24 relative overflow-hidden">

      {/* 1. SMOOTH SCROLLING WATERMARK */}
      <motion.div
        style={{ y: smoothY }}
        className="absolute right-[-5%] top-1/4 pointer-events-none z-0 will-change-transform"
      >
        <h2 className="text-[22vw] font-black text-white opacity-[0.03] uppercase leading-none font-bebas ">
          DEGREES
        </h2>
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* 2. HEADER SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-white text-6xl md:text-8xl font-black uppercase tracking-tighter italic leading-none">
            Academic<br /> <span className="text-[#FF8A50]">& Technical</span>
          </h2>
          <div className="flex items-center gap-4 mt-6">
            <div className="h-[2px] w-12 bg-[#FF8A50]" />
            <p className="text-gray-500 font-mono text-xs uppercase tracking-[0.4em]">
              Credentials_Verification_Complete
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

          {/* 3. EDUCATION: Dynamic Mapping */}
          <div className="space-y-32">
            <h3 className="text-[#FF8A50] font-mono text-xs uppercase tracking-[0.5em] mb-10 flex items-center gap-4">
              <span className="w-12 h-[1px] bg-[#FF8A50]"></span> Academic_Path
            </h3>

            {education.length > 0 ? education.map((edu) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="group"
              >
                <div className="text-white/20 font-bebas text-9xl group-hover:text-[#FF8A50] transition-colors duration-500 italic">
                  {edu.date_label.split('-')[1] || edu.date_label} 
                </div>
                <div className="mt-[-50px] ml-10">
                  <h4 className="text-white text-4xl font-black uppercase italic tracking-tighter">
                    {edu.title}
                  </h4>
                  <p className="text-gray-500 mt-4 leading-relaxed max-w-sm border-l border-white/10 pl-6 group-hover:border-[#FF8A50] transition-colors">
                    {edu.description}
                    <span className="block mt-2 text-[#FF8A50] font-mono text-xs font-bold uppercase tracking-widest">
                      {edu.provider}
                    </span>
                  </p>
                </div>
              </motion.div>
            )) : (
              <p className="text-gray-600 font-mono text-[10px] uppercase tracking-widest italic opacity-40">Connecting_To_Academic_Records...</p>
            )}
          </div>

          {/* 4. CERTS: Dynamic Mapping */}
          <div className="space-y-6">
            <h3 className="text-[#FF8A50] font-mono text-xs uppercase tracking-[0.5em] mb-10 flex items-center gap-4 lg:justify-end">
              Modular_Certs <span className="w-12 h-[1px] bg-[#FF8A50]"></span>
            </h3>

            {certificates.map((cert, i) => (
              <motion.a
                key={cert.id}
                href={getFileUrl(cert.file_url)}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ margin: "-50px" }}
                className="relative bg-[#111] p-8 rounded-2xl border border-white/5 hover:border-[#FF8A50]/40 group flex justify-between items-center overflow-hidden cursor-pointer transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF8A50]/5 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />

                <div className="relative z-10">
                  <h4 className="text-white text-xl font-bold uppercase tracking-tight group-hover:text-[#FF8A50] transition-colors italic leading-none mb-1">
                    {cert.title}
                  </h4>
                  <p className="text-gray-500 font-mono text-[10px] uppercase tracking-widest font-bold">
                    {cert.provider} // {cert.date_label}
                  </p>
                </div>

                <div className="relative z-10 h-10 w-10 rounded-full border border-white/10 flex items-center justify-center text-white/20 group-hover:border-[#FF8A50] group-hover:text-[#FF8A50] group-hover:rotate-[-45deg] transition-all">
                  →
                </div>
              </motion.a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default EducationCerts;