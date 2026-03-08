import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="bg-[#121212] pt-40 pb-12 px-6 md:px-20 border-t border-gray-900">
      <div className="text-center mb-40">
        <p className="text-[#FF8A50] uppercase tracking-[0.4em] text-[10px] font-black mb-6">Get in Touch With Me</p>
        <Link to="/contact" className="text-white text-4xl md:text-7xl font-bold underline decoration-[1px] underline-offset-[16px] hover:text-gray-500 transition-colors cursor-pointer">
          kartikkurmi0906@gmail.com
        </Link>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start gap-12 border-b border-gray-800 pb-20">
        {/* Brand Name */}
        <div className="text-white text-2xl font-black tracking-tighter uppercase">
          Kartik <span className="text-gray-600">Kumar</span> Kurmi
        </div>


        <div className="text-gray-400 text-sm tracking-wide">
          <Link to="/contact" className="inline-block transition-all duration-300 hover:text-[#FF8A50]" style={{}} onMouseEnter={(e) => e.target.style.transform = 'scale(1.2)'} onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>
            +91 77720 55025
          </Link>
          <div className="flex gap-6 mt-6 text-white text-lg">
            <a href="https://github.com/kartikkurmi0906" className="hover:text-[#FF8A50] transition-all duration-300 transform" onMouseEnter={(e) => e.target.style.transform = 'scale(1.4)'} onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/kartkkurmi0906/" className="hover:text-[#FF8A50] transition-all duration-300 transform" onMouseEnter={(e) => e.target.style.transform = 'scale(1.4)'} onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <p className="text-center text-gray-600 text-[10px] tracking-widest uppercase mt-12">
        © 2026. Kartik Kumar Kurmi. All rights reserved.
      </p>
    </footer>
  );
}