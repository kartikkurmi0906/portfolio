import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed w-full h-24 flex items-center justify-between px-10 text-white uppercase tracking-widest text-xs z-50">
      
      <div className="text-2xl flex items-center gap-1 font-bebas">
        KARTIK KUMAR KURMI
      </div>
      
      {/* Navigation Links */}
      <div className="flex items-center space-x-12">
        <Link to="/" className="text-gray-400 hover:text-[#FF8A50] transition-colors">
          Home
        </Link>
        <Link to="/about" className="text-gray-400 hover:text-[#FF8A50] transition-colors">
          About Me
        </Link>
        <Link to="/projects" className="text-gray-400 hover:text-[#FF8A50] transition-colors">
          My Works
        </Link>
        
        {/* Contact Button */}
        <Link 
          to="/contact" 
          className="border border-gray-600 rounded-full px-8 py-3 hover:bg-[#FF8A50] hover:text-black transition-all"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}