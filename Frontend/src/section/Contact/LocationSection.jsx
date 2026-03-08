import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const LocationSection = () => {
  const [time, setTime] = useState("");

  // Live Digital Clock (24-hour format)
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-GB', { hour12: false }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-40 px-6 md:px-24 bg-[#0a0a0a] border-y border-white/5 relative overflow-hidden">
      
      {/* Background Data-Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex items-center justify-center">
        <div className="w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-20 lg:gap-12 text-center lg:text-left">
          
          {/* Node 01: Physical Coordinates */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[#FF8A50] font-mono text-xs font-bold">01</span>
              <div className="h-[1px] w-full bg-white/10 group-hover:bg-[#FF8A50]/40 transition-colors duration-500" />
            </div>
            <h4 className="text-gray-500 font-mono text-[10px] uppercase tracking-[0.4em] mb-4">Current_Deployment</h4>
            <p className="text-white text-4xl font-black italic uppercase tracking-tighter">Indore, IN</p>
            <p className="text-[#FF8A50] font-mono text-[10px] mt-4 opacity-60 tracking-widest">
              22.7196° N // 75.8577° E
            </p>
          </motion.div>

          {/* Node 02: System Availability */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[#FF8A50] font-mono text-xs font-bold">02</span>
              <div className="h-[1px] w-full bg-white/10 group-hover:bg-[#FF8A50]/40 transition-colors duration-500" />
            </div>
            <h4 className="text-gray-500 font-mono text-[10px] uppercase tracking-[0.4em] mb-4">Status_Check</h4>
            <div className="flex items-center gap-4">
              <div className="w-4 h-4 rounded-full bg-[#FF8A50] animate-pulse shadow-[0_0_15px_#FF8A50]" />
              <p className="text-white text-4xl font-black italic uppercase tracking-tighter">Available</p>
            </div>
            <p className="text-[#FF8A50] font-mono text-[10px] mt-4 opacity-60 tracking-widest">
              Ready_for_new_signals
            </p>
          </motion.div>

          {/* Node 03: Local System Time */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="group"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[#FF8A50] font-mono text-xs font-bold">03</span>
              <div className="h-[1px] w-full bg-white/10 group-hover:bg-[#FF8A50]/40 transition-colors duration-500" />
            </div>
            <h4 className="text-gray-500 font-mono text-[10px] uppercase tracking-[0.4em] mb-4">Local_Time</h4>
            <p className="text-white text-5xl font-black italic uppercase tracking-tighter tabular-nums leading-none">
              {time}
            </p>
            <p className="text-[#FF8A50] font-mono text-[10px] mt-4 opacity-60 tracking-widest">
              GMT +5:30 // IST
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default LocationSection;