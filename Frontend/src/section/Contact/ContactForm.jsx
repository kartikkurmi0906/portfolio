import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const ContactForm = () => {
  // --- LOGIC START ---
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('STANDBY'); // STANDBY, SENDING, SUCCESS, ERROR

  const handleTransmit = async (e) => {
    e.preventDefault();
    setStatus('SENDING...');

    try {
      await axios.post('http://localhost:5000/api/contacts/submit', formData);
      setStatus('SUCCESS: SIGNAL_RECEIVED');
      setFormData({ name: '', email: '', message: '' }); // Reset form
    } catch (err) {
      setStatus('ERROR: TRANSMISSION_FAILED');
      console.error(err);
    }
  };
  // --- LOGIC END ---

  return (
    <section className="py-40 px-6 md:px-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
        
        {/* LEFT SIDE: INSTRUCTIONS */}
        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-white text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none mb-8">
              SUBMIT_ <br /> <span className="text-[#FF8A50]">SIGNAL.</span>
            </h2>
            <p className="text-gray-500 font-mono text-[11px] uppercase tracking-[0.4em] leading-relaxed max-w-sm">
              // All incoming data packets are encrypted and routed directly to the Kartik_Core. <br /><br />
              // Please ensure all parameters are defined before transmission.
            </p>
            
            {/* Status Display */}
            <div className="mt-12 font-mono text-[10px] tracking-widest">
                <span className={status.includes('ERROR') ? 'text-red-500' : 'text-[#FF8A50]'}>
                    SYSTEM_STATUS: {status}
                </span>
            </div>
          </motion.div>
        </div>

        {/* RIGHT SIDE: THE FORM */}
        <div className="lg:col-span-7">
          <form onSubmit={handleTransmit} className="space-y-16">
            
            {/* Input Node 01 */}
            <div className="relative group">
              <label className="text-[#FF8A50] font-mono text-[10px] uppercase tracking-[0.5em] block mb-4">
                01_User_Identity
              </label>
              <input 
                type="text" 
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="NAME_OR_ENTITY"
                className="w-full bg-transparent border-b border-white/10 py-6 outline-none focus:border-[#FF8A50] text-3xl md:text-3xl font-black italic uppercase transition-all duration-500 placeholder:text-white/5 text-white"
              />
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#FF8A50] group-focus-within:w-full transition-all duration-700 shadow-[0_0_15px_#FF8A50]" />
            </div>

            {/* Input Node 02 */}
            <div className="relative group">
              <label className="text-[#FF8A50] font-mono text-[10px] uppercase tracking-[0.5em] block mb-4">
                02_Return_Address
              </label>
              <input 
                type="email" 
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                placeholder="EMAIL@DOMAIN.EXE"
                className="w-full bg-transparent border-b border-white/10 py-6 outline-none focus:border-[#FF8A50] text-3xl md:text-3xl font-black italic uppercase transition-all duration-500 placeholder:text-white/5 text-white"
              />
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#FF8A50] group-focus-within:w-full transition-all duration-700 shadow-[0_0_15px_#FF8A50]" />
            </div>

            {/* Input Node 03 */}
            <div className="relative group">
              <label className="text-[#FF8A50] font-mono text-[10px] uppercase tracking-[0.5em] block mb-4">
                03_Data_Payload
              </label>
              <textarea 
                rows="3"
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                placeholder="DESCRIBE_PROJECT_OR_QUERY"
                className="w-full bg-transparent border-b border-white/10 py-6 outline-none focus:border-[#FF8A50] text-3xl md:text-3xl font-black italic uppercase transition-all duration-500 placeholder:text-white/5 text-white resize-none"
              />
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#FF8A50] group-focus-within:w-full transition-all duration-700 shadow-[0_0_15px_#FF8A50]" />
            </div>

            {/* Transmission Button */}
            <motion.button 
              type="submit"
              whileHover={{ x: 20 }}
              whileTap={{ scale: 0.95 }}
              disabled={status === 'SENDING...'}
              className="group flex items-center gap-6 py-8 disabled:opacity-50"
            >
              <div className="w-12 h-12 rounded-full border border-[#FF8A50] flex items-center justify-center group-hover:bg-[#FF8A50] transition-all duration-500">
                <span className="text-[#FF8A50] group-hover:text-black transition-colors text-2xl">
                    {status === 'SENDING...' ? '...' : '→'}
                </span>
              </div>
              <span className="text-white text-2xl font-black uppercase italic tracking-tighter group-hover:text-[#FF8A50] transition-colors">
                {status === 'SENDING...' ? 'TRANSMITTING_DATA...' : 'TRANSMIT_DATA'}
              </span>
            </motion.button>

          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;