import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineDatabase, HiOutlineMail, HiOutlineLogout, HiOutlineAcademicCap } from 'react-icons/hi';
import ProjectManager from '../admin/ProjectManager';
import ContactInbox from '../admin/ContactInbox';
import CredentialManager from '../admin/CredentialManager'; // New Component

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('projects');

  const logout = () => {
    localStorage.removeItem('adminToken');
    window.location.href = '/admin';
  };

  return (
    <div className="flex min-h-screen bg-[#0a0a0a] text-white font-mono">
      
      {/* SIDEBAR */}
      <aside className="w-64 border-r border-white/5 bg-black/50 backdrop-blur-xl flex flex-col p-6 fixed h-full z-50">
        <div className="mb-12">
          <span className="text-[#FF8A50] text-[10px] tracking-[0.5em] block mb-2">SYSTEM_ADMIN</span>
          <h2 className="text-xl font-black italic tracking-tighter">KARTIK_CORE</h2>
        </div>

        <nav className="flex-grow space-y-2">
          <SidebarLink 
            icon={<HiOutlineDatabase />} 
            label="PROJECTS" 
            active={activeTab === 'projects'} 
            onClick={() => setActiveTab('projects')} 
          />
          {/* NEW CREDENTIALS TAB */}
          <SidebarLink 
            icon={<HiOutlineAcademicCap />} 
            label="CREDENTIALS" 
            active={activeTab === 'credentials'} 
            onClick={() => setActiveTab('credentials')} 
          />
          <SidebarLink 
            icon={<HiOutlineMail />} 
            label="CONTACTS" 
            active={activeTab === 'contacts'} 
            onClick={() => setActiveTab('contacts')} 
          />
        </nav>

        <button 
          onClick={logout}
          className="flex items-center gap-4 text-gray-500 hover:text-red-500 transition-colors pt-6 border-t border-white/5 text-xs tracking-widest"
        >
          <HiOutlineLogout /> LOGOUT_SESSION
        </button>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-grow ml-64 p-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {activeTab === 'projects' && <ProjectManager />}
            {activeTab === 'credentials' && <CredentialManager />}
            {activeTab === 'contacts' && <ContactInbox />}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

const SidebarLink = ({ icon, label, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`w-full flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-300 group ${
      active ? 'bg-[#FF8A50] text-black font-bold' : 'hover:bg-white/5 text-gray-400'
    }`}
  >
    <span className={active ? 'text-black' : 'text-[#FF8A50]'}>{icon}</span>
    <span className="text-[10px] tracking-widest uppercase">{label}</span>
  </button>
);

export default AdminDashboard;