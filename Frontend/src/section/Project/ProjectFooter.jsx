import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Footer = () => {
    const socialLinks = [
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/kartkkurmi0906/',
            icon: <FaLinkedinIn size={24} />
        },
        {
            name: 'GitHub',
            url: 'https://github.com/kartikkurmi0906',
            icon: <FaGithub size={24} />
        }
    ];

    return (
        <footer className="bg-[#0a0a0a] pt-60 pb-12 overflow-hidden border-t border-white/5">

            {/* 1. INFINITE MARQUEE STRIP */}
            <div className="relative flex overflow-hidden border-y border-white/5 py-10 bg-white/[0.01]">
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                    className="flex whitespace-nowrap gap-20"
                >
                    {[...Array(5)].map((_, i) => (
                        <h2 key={i} className="text-white/10 text-7xl md:text-[8vw] font-black uppercase italic tracking-tighter">
                            Ready to build <span className="text-[#FF8A50]">Next-Gen?</span> • Let's Talk •
                        </h2>
                    ))}
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-24 mt-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end">

                    {/* 2. LEFT SIDE: THE BIG CTA */}
                    <div>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-[#FF8A50] font-mono text-xs uppercase tracking-[0.6em] mb-10 font-bold"
                        >
              // CONTACT_GATEWAY
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-white text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-none group cursor-default"
                        >
                            SEND A <br />
                            <span className="text-transparent stroke-white opacity-40 group-hover:opacity-100 group-hover:text-[#FF8A50] group-hover:stroke-[#FF8A50] transition-all duration-500 ease-in-out">
                                SIGNAL.
                            </span>
                        </motion.h2>

                        <style jsx>{`.stroke-white {-webkit-text-stroke: 1.5px white;}.group:hover .stroke-white {-webkit-text-stroke: 1.5px #FF8A50;}`}</style>
                    </div>

                    {/* 3. RIGHT SIDE: EMAIL & SOCIAL ICONS */}
                    <div className="flex flex-col gap-12 lg:items-end">
                        {/* Direct Email Link */}
                        <motion.a
                            whileHover={{ x: -10 }}
                            href="mailto:hello@yourdomain.com"
                            className="text-white text-3xl md:text-5xl font-light hover:text-[#FF8A50] transition-all duration-300 border-b border-white/10 pb-4 italic tracking-tighter"
                        >
                            kartikkurmi0906@gmail.com
                        </motion.a>

                        {/* Social Icons with Glow Effect */}
                        <div className="flex gap-10 items-center">
                            {socialLinks.map((link) => (
                                <motion.a
                                    key={link.name}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -8, scale: 1.1 }}
                                    className="text-gray-500 hover:text-[#FF8A50] transition-all duration-500 relative group p-2"
                                >
                                    {/* The Icon */}
                                    <div className="relative z-10">
                                        {link.icon}
                                    </div>

                                    {/* Holographic Glow */}
                                    <div className="absolute inset-0 bg-[#FF8A50] blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />

                                    {/* Invisible Label for Screen Readers */}
                                    <span className="sr-only">{link.name}</span>
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 4. SYSTEM METADATA BAR (The Bottom) */}
                <div className="mt-40 flex flex-col md:flex-row justify-between items-center opacity-30 text-[10px] font-mono uppercase tracking-[0.4em] text-white border-t border-white/5 pt-10">
                    <div className="flex gap-8">
                        <p>© 2026 // KARTIK_KURMI</p>
                        <p className="hidden md:block">BHOPAL_IN // 23.25N 77.41E</p>
                    </div>
                    <p className="mt-4 md:mt-0">ENCRYPTED_ARCHIVE_v.01</p>
                </div>
            </div>

            <style jsx>{`
        .stroke-white {
          -webkit-text-stroke: 1.5px white;
        }
      `}</style>
        </footer>
    );
};

export default Footer;