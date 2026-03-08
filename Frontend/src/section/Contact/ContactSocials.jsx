import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaArrowRight } from 'react-icons/fa';
import { HiOutlineDocumentDownload } from 'react-icons/hi';

const ContactSocials = () => {
  const archives = [
    {
      label: "GitHub_Repository",
      title: "KARTIK_KURMI",
      icon: <FaGithub />,
      url: "https://github.com/kartikkurmi0906",
      tag: "Source_Code"
    },
    {
      label: "Professional_Network",
      title: "LINKEDIN_CORE",
      icon: <FaLinkedinIn />,
      url: "https://www.linkedin.com/in/kartkkurmi0906/",
      tag: "Social_Sync"
    }
  ];

  return (
    <section className="py-40 px-6 md:px-24 bg-[#0a0a0a] border-t border-white/5 relative overflow-hidden">
      
      {/* Background Decorative Text */}
      <div className="absolute right-0 bottom-0 opacity-[0.02] pointer-events-none select-none text-[20vw] font-black text-white italic leading-none translate-y-1/4">
        ARCHIVE
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          {/* LEFT: RESUME DOWNLOAD */}
          <div className="lg:col-span-5">
            <h3 className="text-gray-500 font-mono text-[10px] uppercase tracking-[0.4em] mb-12">// OFFLINE_ASSETS</h3>
            
            <motion.a 
              href="/Resume/resumekatik.pdf" // Update with your actual resume path
              download="Kartik_Kurmi_Resume.pdf"
              whileHover={{ scale: 1.02 }}
              className="group relative flex flex-col p-8 border border-white/10 bg-white/[0.02] rounded-xl overflow-hidden hover:border-[#FF8A50]/50 transition-all duration-500"
            >
              <div className="flex justify-between items-start mb-12">
                <div className="p-4 bg-white/5 rounded-lg text-[#FF8A50] group-hover:bg-[#FF8A50] group-hover:text-black transition-colors duration-500">
                  <HiOutlineDocumentDownload size={32} />
                </div>
                <span className="text-white/20 font-mono text-[10px]">VER_2026.01</span>
              </div>
              
              <h4 className="text-white text-3xl font-black italic uppercase tracking-tighter mb-2">Download_CV</h4>
              <p className="text-gray-500 font-mono text-[10px] uppercase tracking-widest">Format: Portable_Document_File</p>
              
              {/* Animated Progress Bar Decor */}
              <div className="mt-8 h-[2px] w-full bg-white/5 relative overflow-hidden">
                <motion.div 
                  initial={{ x: "-100%" }}
                  whileInView={{ x: "0%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="absolute inset-0 bg-[#FF8A50]" 
                />
              </div>
            </motion.a>
          </div>

          {/* RIGHT: SOCIAL GRID */}
          <div className="lg:col-span-7 flex flex-col justify-end">
            <h3 className="text-gray-500 font-mono text-[10px] uppercase tracking-[0.4em] mb-12 lg:text-right">// EXTERNAL_NODES</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {archives.map((node, i) => (
                <motion.a 
                  key={i}
                  href={node.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group p-8 border border-white/5 hover:bg-white/[0.03] transition-all flex flex-col gap-6"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-[#FF8A50] text-xl">{node.icon}</span>
                    <FaArrowRight className="text-white/10 group-hover:text-[#FF8A50] group-hover:translate-x-2 transition-all" />
                  </div>
                  <div>
                    <span className="text-gray-600 font-mono text-[9px] uppercase tracking-widest block mb-1">{node.label}</span>
                    <h5 className="text-white font-black italic uppercase tracking-tight text-xl">{node.title}</h5>
                  </div>
                  <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[8px] font-mono text-white/20 uppercase tracking-[0.3em]">{node.tag}</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FF8A50] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSocials;