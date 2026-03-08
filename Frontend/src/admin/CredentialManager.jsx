import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { HiOutlineTrash, HiOutlineCloudUpload, HiOutlineCheckCircle, HiOutlineLink } from 'react-icons/hi';

const CredentialManager = () => {
  const [creds, setCreds] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    type: 'certificate',
    title: '',
    provider: '',
    date_label: '',
    description: '',
    file_url: '' // This will hold either the uploaded path OR the manual URL
  });

  const fetchCreds = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/credentials');
      setCreds(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      setCreds([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => { fetchCreds(); }, []);

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const data = new FormData();
    data.append('image', file);

    setIsUploading(true);
    try {
      const res = await axios.post('http://localhost:5000/api/upload', data);
      setFormData(prev => ({ ...prev, file_url: res.data.imageUrl }));
    } catch (err) {
      alert("UPLOAD_FAILED");
    } finally { setIsUploading(false); }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/credentials', formData);
      setFormData({ type: 'certificate', title: '', provider: '', date_label: '', description: '', file_url: '' });
      fetchCreds();
    } catch (err) {
      alert("SAVE_ERROR");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("TERMINATE_CREDENTIAL?")) {
      try {
        await axios.delete(`http://localhost:5000/api/credentials/${id}`);
        fetchCreds();
      } catch (err) {
        alert("DELETE_ERROR");
      }
    }
  };

  if (isLoading) return <div className="text-[#FF8A50] font-mono p-12">LOADING_CORE_NODES...</div>;

  return (
    <div className="space-y-12">
      {/* 1. REGISTRATION FORM (TOP) */}
      <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
        <h2 className="text-white text-xl font-black italic uppercase mb-6 tracking-tighter flex items-center gap-3">
          <span className="w-8 h-[1px] bg-[#FF8A50]"></span> Register_New_Node
        </h2>
        <form onSubmit={handleSave} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-4">
            <select 
              className="w-full bg-[#111] border border-white/10 p-3 text-white font-mono text-xs uppercase outline-none focus:border-[#FF8A50]"
              value={formData.type}
              onChange={(e) => setFormData({...formData, type: e.target.value})}
            >
              <option value="education">Academic_Education</option>
              <option value="certificate">Technical_Certification</option>
            </select>
            <input 
              className="w-full bg-transparent border-b border-white/10 p-2 text-white text-sm outline-none focus:border-[#FF8A50]"
              placeholder="TITLE (e.g. B.Tech CS)"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              required
            />
          </div>

          <div className="space-y-4">
            <input 
              className="w-full bg-transparent border-b border-white/10 p-2 text-white text-sm outline-none focus:border-[#FF8A50]"
              placeholder="PROVIDER (e.g. IBM / University)"
              value={formData.provider}
              onChange={(e) => setFormData({...formData, provider: e.target.value})}
            />
            <input 
              className="w-full bg-transparent border-b border-white/10 p-2 text-white text-sm outline-none focus:border-[#FF8A50]"
              placeholder="DATE_LABEL (e.g. 2023-2027)"
              value={formData.date_label}
              onChange={(e) => setFormData({...formData, date_label: e.target.value})}
            />
          </div>

          <div className="space-y-4">
            {/* MANUAL URL INPUT */}
            <div className="relative">
              <HiOutlineLink className="absolute left-2 top-3 text-gray-500" />
              <input 
                className="w-full bg-transparent border-b border-white/10 p-2 pl-8 text-white text-sm outline-none focus:border-[#FF8A50]"
                placeholder="EXTERNAL_URL (Optional)"
                value={formData.file_url}
                onChange={(e) => setFormData({...formData, file_url: e.target.value})}
              />
            </div>

            {/* FILE UPLOAD TOGGLE */}
            <div 
              onClick={() => fileInputRef.current.click()}
              className="border border-dashed border-white/20 p-2 text-center cursor-pointer hover:bg-white/5 transition-all rounded flex items-center justify-center gap-3"
            >
              <input type="file" ref={fileInputRef} onChange={handleFileUpload} className="hidden" />
              {formData.file_url.includes('/uploads/') ? (
                 <><HiOutlineCheckCircle className="text-[#FF8A50]" /> <span className="text-[10px] text-white">FILE_READY</span></>
              ) : (
                 <><HiOutlineCloudUpload className="text-gray-500" /> <span className="text-[10px] text-gray-500 uppercase">{isUploading ? 'UPLOADING...' : 'OR_UPLOAD_FILE'}</span></>
              )}
            </div>
            
            <button type="submit" className="w-full bg-[#FF8A50] text-black font-black py-2 text-xs uppercase tracking-widest italic hover:bg-white transition-all">
              EXECUTE_LINK
            </button>
          </div>
        </form>
      </div>

      {/* 2. DUAL LIST SECTION (BOTTOM) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* EDUCATION COLUMN */}
        <div>
          <h3 className="text-[#FF8A50] font-mono text-[10px] uppercase tracking-[0.4em] mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-[#FF8A50] rounded-full animate-pulse"></span> ACADEMIC_RECORDS
          </h3>
          <div className="space-y-2">
            {creds.filter(c => c.type === 'education').map(c => (
              <CredentialCard key={c.id} data={c} onDelete={handleDelete} />
            ))}
          </div>
        </div>

        {/* CERTIFICATES COLUMN */}
        <div>
          <h3 className="text-[#FF8A50] font-mono text-[10px] uppercase tracking-[0.4em] mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-[#FF8A50] rounded-full animate-pulse"></span> TECH_CERTIFICATIONS
          </h3>
          <div className="space-y-2">
            {creds.filter(c => c.type === 'certificate').map(c => (
              <CredentialCard key={c.id} data={c} onDelete={handleDelete} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable Small Card for the Lists
const CredentialCard = ({ data, onDelete }) => (
  <div className="bg-white/[0.03] border border-white/5 p-4 flex justify-between items-center group hover:border-[#FF8A50]/30 transition-all rounded-xl">
    <div>
      <h4 className="text-white font-bold uppercase text-sm tracking-tight">{data.title}</h4>
      <p className="text-gray-500 text-[10px] font-mono">{data.provider} // {data.date_label}</p>
      {data.file_url && (
        <a href={data.file_url.startsWith('http') ? data.file_url : `http://localhost:5000${data.file_url}`} 
           target="_blank" rel="noreferrer" 
           className="text-[#FF8A50] text-[9px] underline mt-1 block">
           VIEW_SOURCE_LINK
        </a>
      )}
    </div>
    <button 
      onClick={() => onDelete(data.id)} 
      className="opacity-0 group-hover:opacity-100 text-gray-600 hover:text-red-500 transition-all p-2"
    >
      <HiOutlineTrash />
    </button>
  </div>
);

export default CredentialManager;