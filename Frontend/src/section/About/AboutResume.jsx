import { HiOutlineDocumentDownload } from 'react-icons/hi';
import { motion } from 'framer-motion';

const ResumeSection = () => {
  return (
    <section className="py-24 px-6 md:px-24 bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* TEXT SIDE */}
        <div className="max-w-xl">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#FF8A50] font-mono text-[10px] uppercase tracking-[0.5em] block mb-4"
          >
            // DOCUMENTATION_v2026
          </motion.span>
          <h2 className="text-white text-5xl md:text-6xl font-black uppercase italic tracking-tighter leading-none mb-6">
            CURRICULUM <br /> <span className="text-transparent stroke-white opacity-40">VITAE.</span>
          </h2>
          <p className="text-gray-500 font-mono text-xs leading-relaxed uppercase tracking-widest">
            Detailed breakdown of technical stack, architecture experience, and project history.
          </p>
        </div>

        {/* DOWNLOAD BUTTON SIDE */}
        <motion.a 
          href="/Resume/resumekatik.pdf" 
          download="Kartik_Kurmi_Resume.pdf"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative flex items-center gap-8 p-10 bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden hover:border-[#FF8A50]/50 transition-all duration-500"
        >
          {/* Glowing Background Effect */}
          <div className="absolute inset-0 bg-[#FF8A50] opacity-0 group-hover:opacity-5 blur-3xl transition-opacity" />
          
          <div className="relative z-10 flex flex-col">
            <span className="text-white text-2xl font-black uppercase italic tracking-tighter group-hover:text-[#FF8A50] transition-colors">
              GET_RESUME.PDF
            </span>
            <span className="text-gray-600 font-mono text-[10px] mt-2 uppercase">Size: 1.2 MB // Format: PDF</span>
          </div>

          <div className="relative z-10 p-5 bg-white/5 rounded-full text-[#FF8A50] group-hover:bg-[#FF8A50] group-hover:text-black transition-all duration-500 shadow-[0_0_20px_rgba(255,138,80,0)] group-hover:shadow-[0_0_30px_rgba(255,138,80,0.4)]">
            <HiOutlineDocumentDownload size={35} />
          </div>
        </motion.a>

      </div>

      <style jsx>{`
        .stroke-white { -webkit-text-stroke: 1.5px white; }
      `}</style>
    </section>
  );
};
export default ResumeSection;