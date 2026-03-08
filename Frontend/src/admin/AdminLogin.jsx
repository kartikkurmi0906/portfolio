import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios'; // You may need to run: npm install axios

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [status, setStatus] = useState('Awaiting_Credentials');

  const handleLogin = async (e) => {
    e.preventDefault();
    setStatus('Authenticating...');
    
    try {
      // Talking to your Node.js server (Port 5000)
      const response = await axios.post('http://localhost:5000/api/auth/login', credentials);
      
      // Save the "VIP Token" in your browser
      localStorage.setItem('adminToken', response.data.token);
      setStatus('Access_Granted');
      
      // Redirect to Admin Dashboard after 1.5 seconds
      setTimeout(() => window.location.href = '/admin/dashboard', 1500);
    } catch (err) {
      setStatus('Access_Denied: Invalid_Identity');
    }
  };

  return (
    <div className="h-screen bg-[#0a0a0a] flex items-center justify-center px-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md p-10 border border-white/10 bg-white/[0.02] rounded-2xl relative overflow-hidden"
      >
        {/* Decorative Grid Background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#FF8A50_1px,transparent_1px)] [background-size:20px_20px]" />

        <div className="relative z-10">
          <div className="mb-10 text-center">
            <span className="text-[#FF8A50] font-mono text-[10px] uppercase tracking-[0.5em] block mb-2">
              // secure_terminal_v4.0
            </span>
            <h2 className="text-white text-4xl font-black uppercase italic tracking-tighter">
              ADMIN_<span className="text-transparent stroke-white opacity-40">LOGIN</span>
            </h2>
          </div>

          <form onSubmit={handleLogin} className="space-y-8">
            <div className="space-y-2">
              <label className="text-gray-500 font-mono text-[9px] uppercase tracking-widest px-1">User_Identifier</label>
              <input 
                type="text" 
                required
                onChange={(e) => setCredentials({...credentials, username: e.target.value})}
                className="w-full bg-black/50 border border-white/5 p-4 rounded-lg outline-none focus:border-[#FF8A50] text-white font-mono transition-all"
                placeholder="IDENTIFY"
              />
            </div>

            <div className="space-y-2">
              <label className="text-gray-500 font-mono text-[9px] uppercase tracking-widest px-1">Access_Code</label>
              <input 
                type="password" 
                required
                onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                className="w-full bg-black/50 border border-white/5 p-4 rounded-lg outline-none focus:border-[#FF8A50] text-white font-mono transition-all"
                placeholder="••••••••"
              />
            </div>

            <button 
              type="submit"
              className="w-full py-4 bg-[#FF8A50] text-black font-black uppercase italic tracking-widest text-sm rounded-lg hover:shadow-[0_0_30px_rgba(255,138,80,0.3)] transition-all"
            >
              Execute_Login →
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center">
            <span className={`font-mono text-[9px] uppercase tracking-widest ${status.includes('Denied') ? 'text-red-500' : 'text-[#FF8A50]'}`}>
              Status: {status}
            </span>
            <div className={`w-2 h-2 rounded-full ${status === 'Authenticating...' ? 'bg-yellow-500 animate-ping' : 'bg-[#FF8A50]'}`} />
          </div>
        </div>
      </motion.div>

      <style jsx>{`
        .stroke-white { -webkit-text-stroke: 1px white; }
      `}</style>
    </div>
  );
};

export default AdminLogin;