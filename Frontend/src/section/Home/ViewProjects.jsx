import { Link } from "react-router-dom"; // CTA link
export default function ViewProjects() {
  return (
    <div className="h-[50vh] flex flex-col items-center justify-center bg-[#121212]">
         <h4 className="font-bebas text-8xl md:text-[150px] text-white/20 uppercase">Wanna see more?</h4>
         <Link to="/projects" className="font-bebas text-brand-orange text-2xl hover:tracking-[0.2em] transition-all duration-500 mt-[-14px]">
            VIEW ALL PROJECTS →
         </Link>
      </div>
  );
}