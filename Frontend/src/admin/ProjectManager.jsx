import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { HiOutlineTrash, HiOutlineCloudUpload, HiOutlineCheckCircle, HiOutlineTerminal, HiOutlineLink } from 'react-icons/hi';

const ProjectManager = () => {
  const [projects, setProjects] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    title: '',
    tech_stack: '',
    description: '',
    link: '',
    img_url: '' 
  });

  const fetchProjects = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/projects');
      setProjects(res.data);
    } catch (err) {
      console.error("SIGNAL_LOST: Cannot fetch projects");
    }
  };

  useEffect(() => { fetchProjects(); }, []);

  // --- METHOD 1: LOCAL MULTER UPLOAD ---
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const data = new FormData();
    data.append('image', file);

    setIsUploading(true);
    try {
      const res = await axios.post('http://localhost:5000/api/upload', data, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      // Set the returned local server URL
      setFormData({ ...formData, img_url: res.data.imageUrl });
    } catch (err) {
      alert("UPLOAD_ERROR: Ensure 'uploads' folder exists in Backend root.");
    } finally {
      setIsUploading(false);
    }
  };

  const handleDeploy = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/projects', formData);
      setFormData({ title: '', tech_stack: '', description: '', link: '', img_url: '' });
      fetchProjects();
    } catch (err) {
      alert("DEPLOY_FAILED");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("CONFIRM_PROJECT_DELETION")) {
      await axios.delete(`http://localhost:5000/api/projects/${id}`);
      fetchProjects();
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-12 h-full">

      {/* LEFT: BLUEPRINT FORM */}
      <div className="w-full lg:w-[400px] flex-shrink-0">
        <div className="sticky top-0 border-l-2 border-[#FF8A50] pl-6 py-4">
          <h2 className="text-white text-3xl font-black italic uppercase tracking-tighter mb-2">Build_Node</h2>
          <p className="text-gray-500 font-mono text-[9px] uppercase tracking-widest mb-8">// Input_Parameters_Below</p>

          <form onSubmit={handleDeploy} className="space-y-6">
            
            {/* HYBRID VISUAL INPUT: UPLOAD OR LINK */}
            <div className="space-y-4">
              <label className="text-gray-600 font-mono text-[8px] uppercase">Project_Visual_Source</label>
              
              {/* Option A: Local Upload */}
              <div 
                onClick={() => fileInputRef.current.click()}
                className="group border-2 border-dashed border-white/5 p-6 text-center hover:border-[#FF8A50]/40 transition-all cursor-pointer relative rounded-xl bg-white/[0.02]"
              >
                <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" accept="image/*" />
                
                {formData.img_url && formData.img_url.includes('localhost:5000') ? (
                  <div className="space-y-2">
                    <HiOutlineCheckCircle className="text-[#FF8A50] text-2xl mx-auto" />
                    <img src={formData.img_url} className="h-16 mx-auto rounded border border-white/10 object-cover" alt="Local Preview" />
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-3">
                    <HiOutlineCloudUpload className="text-gray-600 text-xl group-hover:text-[#FF8A50]" />
                    <span className="text-gray-600 font-mono text-[9px] uppercase tracking-widest group-hover:text-white">
                      {isUploading ? 'Uploading...' : 'Upload_Local_File'}
                    </span>
                  </div>
                )}
              </div>

              {/* Option B: Manual URL Paste */}
              <div className="group border-b border-white/10 focus-within:border-[#FF8A50] transition-colors pb-2">
                <div className="flex items-center gap-2 mb-1">
                  <HiOutlineLink className="text-[#FF8A50] text-xs" />
                  <label className="text-gray-600 font-mono text-[8px] uppercase font-bold">External_Hologram_URL</label>
                </div>
                <input
                  className="w-full bg-transparent text-white font-mono text-[10px] outline-none"
                  placeholder="HTTPS://CDN.IMAGE.COM/ART.JPG"
                  value={formData.img_url}
                  onChange={(e) => setFormData({ ...formData, img_url: e.target.value })}
                />
              </div>
            </div>

            <hr className="border-white/5" />

            {/* Rest of the form */}
            <div className="group border-b border-white/10 focus-within:border-[#FF8A50] transition-colors pb-2">
              <label className="text-gray-600 font-mono text-[8px] uppercase">Title_Identifier</label>
              <input
                className="w-full bg-transparent text-white font-mono text-sm outline-none mt-1"
                placeholder="PROJ_NAME"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required
              />
            </div>

            <div className="group border-b border-white/10 focus-within:border-[#FF8A50] transition-colors pb-2">
              <label className="text-gray-600 font-mono text-[8px] uppercase">Technology_Stack</label>
              <input
                className="w-full bg-transparent text-white font-mono text-sm outline-none mt-1"
                placeholder="JS / REACT / NODE"
                value={formData.tech_stack}
                onChange={(e) => setFormData({ ...formData, tech_stack: e.target.value })}
              />
            </div>

            <div className="group border-b border-white/10 focus-within:border-[#FF8A50] transition-colors pb-2">
              <label className="text-gray-600 font-mono text-[8px] uppercase">Execution_Link</label>
              <input
                className="w-full bg-transparent text-white font-mono text-sm outline-none mt-1"
                placeholder="HTTPS://..."
                value={formData.link}
                onChange={(e) => setFormData({ ...formData, link: e.target.value })}
              />
            </div>

            <div className="group border-b border-white/10 focus-within:border-[#FF8A50] transition-colors pb-2">
              <label className="text-gray-600 font-mono text-[8px] uppercase">Project_Brief</label>
              <textarea
                className="w-full bg-transparent text-white font-mono text-sm outline-none mt-1 h-20 resize-none"
                placeholder="SUMMARY..."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
            </div>

            <button type="submit" className="w-full flex items-center justify-center gap-4 bg-[#FF8A50] text-black font-black py-4 uppercase italic text-[11px] tracking-[0.3em] hover:bg-white transition-all">
               Execute_Deployment
            </button>
          </form>
        </div>
      </div>

      {/* RIGHT: SYSTEM LOG */}
      <div className="flex-grow">
        <div className="flex justify-between items-end mb-10 border-b border-white/5 pb-4">
          <span className="text-gray-500 font-mono text-[9px] uppercase tracking-[0.5em] font-bold flex items-center gap-2">
            <HiOutlineTerminal /> Project_Log_Manifest
          </span>
          <span className="text-[#FF8A50] font-mono text-[9px] uppercase tracking-widest">{projects.length}_Active_Nodes</span>
        </div>

        <div className="grid gap-px bg-white/5 border border-white/5">
          {projects.map((proj, i) => (
            <div key={proj.id} className="bg-[#0a0a0a] group relative flex items-center justify-between p-8 hover:bg-white/[0.02] transition-colors">
              <div className="flex items-center gap-10">
                <span className="text-gray-800 font-mono text-[10px] font-bold group-hover:text-[#FF8A50] transition-colors">
                  0{i + 1}
                </span>

                <div className="space-y-1">
                  <h4 className="text-white text-xl font-black uppercase italic tracking-tighter group-hover:translate-x-1 transition-transform">
                    {proj.title}
                  </h4>
                  <div className="flex gap-4 items-center">
                    <p className="text-[#FF8A50] font-mono text-[8px] uppercase tracking-widest">{proj.tech_stack}</p>
                    <div className="w-1 h-1 rounded-full bg-gray-800" />
                    <p className="text-gray-600 font-mono text-[8px] uppercase tracking-widest line-clamp-1 max-w-xs">{proj.description}</p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleDelete(proj.id)}
                className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 text-gray-500 hover:text-red-500 font-mono text-[9px] uppercase tracking-tighter"
              >
                Terminate_Sequence <HiOutlineTrash className="text-lg" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectManager;