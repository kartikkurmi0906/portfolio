import React from 'react';
import {Link} from "react-router-dom";
import { motion } from 'framer-motion';
import { FaGamepad, FaCamera, FaPlane, FaLightbulb } from 'react-icons/fa';
import { GiMountains } from 'react-icons/gi';
import FriendsImg from "../../assets/friends.jpeg";
const AboutBento = () => {
  return (
    <section className="bg-[#0a0a0a] py-32 px-6 md:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 flex items-end justify-between">
          <h2 className="text-white text-5xl md:text-7xl font-black uppercase  leading-none">
            Beyond <br /> <span className="text-[#FF8A50] font-bebas tracking-wide">The System</span>
          </h2>
          <p className="text-gray-500 font-mono text-xs uppercase tracking-[0.3em] hidden md:block">
            // Personal_Interests_v1.0
          </p>
        </div>

        {/* The Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[400px]">

          {/* Card 1: Large Quote/Philosophy */}
          <motion.div
            whileHover={{ y: -5 }}
            className="md:col-span-2 md:row-span-1 bg-[#111] border border-white/5 rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 text-8xl font-black text-[#FF8A50] group-hover:opacity-10 transition-opacity italic font-bebas">LOGIC</div>
            <p className="text-white text-2xl md:text-3xl font-bold italic leading-tight z-10">
              "I believe code should be as <span className="text-[#FF8A50]">clean</span> as the data it processes."
            </p>
          </motion.div>

          {/* Card 2: Friends & Social (Background Image Style) */}
          <motion.div
            whileHover={{ y: -5 }}
            className="relative bg-[#111] border border-white/5 rounded-3xl overflow-hidden group flex flex-col items-center justify-center text-center p-8"
          >
            {/* 1. BACKGROUND IMAGE WITH OVERLAY */}
            <div
              className="absolute inset-0 z-0 bg-cover bg-center grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 opacity-20 group-hover:opacity-40"
              style={{
                backgroundImage: `url('${FriendsImg}')`, // Replace with your image path
              }}
            />

            {/* 2. GRADIENT VIGNETTE (Ensures text stays readable) */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10" />

            {/* 3. CONTENT */}
            <div className="relative z-20 flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full border border-[#FF8A50]/30 flex items-center justify-center bg-[#0a0a0a]/80 backdrop-blur-sm group-hover:border-[#FF8A50] transition-colors">
                <svg
                  className="w-6 h-6 text-[#FF8A50]"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>

              <div className="space-y-1">
                <h5 className="text-white font-bold uppercase tracking-tighter text-lg leading-none">
                  Social <span className="text-[#FF8A50]">Nodes</span>
                </h5>
                <p className="text-gray-500 font-mono text-[9px] uppercase tracking-[0.2em]">
                // Spending time with friends
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Creative/Innovation (Orange Card) */}
          <motion.div
            whileHover={{ scale: 0.98 }}
            className="bg-[#FF8A50] rounded-3xl p-8 flex flex-col justify-between text-black"
          >
            <FaLightbulb className="text-4xl" />
            <div>
              <h4 className="font-black text-2xl uppercase leading-none mb-1">Constant</h4>
              <p className="font-bold text-sm uppercase tracking-tighter">Learning & Innovation</p>
            </div>
          </motion.div>

          {/* Card 4: Status/Freelance (Wide) */}
          <motion.div
            whileHover={{ y: -5 }}
            className="md:col-span-2 bg-gradient-to-br from-[#111] to-[#0a0a0a] border border-[#FF8A50]/20 rounded-3xl p-8 flex items-center justify-between"
          >
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#FF8A50] animate-pulse" />
                <span className="text-[#FF8A50] font-mono text-[10px] uppercase tracking-[0.2em]">Current Status</span>
              </div>
              <h4 className="text-white text-3xl font-black uppercase tracking-tighter">Open for <br /> Working</h4>
            </div>
            <Link to="/contact">
            <div className='w-40 h-15 border-2 border-[#FF8A50] rounded-full flex items-center justify-between hover:bg-[#FF8A50] transition-colors cursor-pointer'>
              <span className="text-gray-500 text-[13px] uppercase font-bold px-4 tracking-tighter leading-tight hover:text-black ">Contact Me</span>
              <button className="bg-white text-black font-black p-5 rounded-full  transition-colors">
                <FaPlane className="-rotate-45" />
              </button>
            </div>
            </Link>
          </motion.div>

          {/* Card 5: Travel/Coordinates (Boarding Pass Style) */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-[#111] border border-white/5 rounded-3xl p-8 flex flex-col justify-between group overflow-hidden relative"
          >
            {/* Decorative Background Map/Pattern */}
            <div className="absolute top-0 right-0 p-4 opacity-15 group-hover:opacity-10 transition-opacity">
              <FaPlane className="text-8xl -rotate-45" />
            </div>

            <div className="z-10">
              <div className="flex items-center justify-between mb-4">
                <GiMountains className="text-2xl text-[#FF8A50]" />
                <span className="text-[10px] font-mono text-gray-500 tracking-tighter uppercase">PNR: KkK-2026</span>
              </div>
              <h5 className="text-white font-black text-xl leading-tight uppercase italic">Global <br /> Explorer</h5>
            </div>

            <div className="z-10 border-t border-white/10 pt-4 mt-4">
              <p className="text-gray-500 text-[10px] uppercase font-mono tracking-widest leading-none">
                Current Destination: <span className="text-[#FF8A50]">Indore, IN</span>
              </p>
              <p className="text-gray-600 text-[9px] mt-2 uppercase italic tracking-tighter">
      // Searching for new perspectives...
              </p>
            </div>
          </motion.div>

          {/* Card 6: Visual Storytelling (Camera Viewfinder Style) */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-[#111] border border-white/5 rounded-3xl p-8 flex flex-col justify-between group relative overflow-hidden"
          >
            {/* Viewfinder Corners (Decorative) */}
            <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-[#FF8A50]/20 group-hover:border-[#FF8A50] transition-colors" />
            <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-[#FF8A50]/20 group-hover:border-[#FF8A50] transition-colors" />
            <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-[#FF8A50]/20 group-hover:border-[#FF8A50] transition-colors" />
            <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-[#FF8A50]/20 group-hover:border-[#FF8A50] transition-colors" />

            <div className="z-10 flex justify-between items-start">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest group-hover:text-white transition-colors">REC</span>
                </div>
                <span className="text-[9px] font-mono text-gray-600 uppercase">4K RAW 60FPS</span>
              </div>
              <FaCamera className="text-xl text-gray-700 group-hover:text-[#FF8A50] transition-colors" />
            </div>

            <div className="z-10 mt-auto">
              <h5 className="text-white font-black text-xl uppercase italic leading-none mb-2">
                Visual <br /> <span className="text-[#FF8A50]">Aesthetics</span>
              </h5>
              <p className="text-gray-500 text-[10px] uppercase font-bold tracking-tighter leading-tight">
                Capturing the world through <br /> lenses & motion.
              </p>
            </div>

            {/* Center Focus Bracket (Visible on Hover) */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none">
              <div className="w-12 h-12 border-2 border-[#FF8A50] rounded-full" />
              <div className="absolute w-1 h-8 bg-[#FF8A50]" />
              <div className="absolute w-8 h-1 bg-[#FF8A50]" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutBento;