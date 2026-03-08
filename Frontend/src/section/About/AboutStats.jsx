import { motion } from 'framer-motion';

const stats = [
  { label: 'Coding Experience', val: '1+', unit: 'Years' },
  { label: 'Projects Completed', val: '5+', unit: 'Systems' },
  { label: 'Technologies Used', val: '12+', unit: 'Tools' },
  { label: 'Tea  Consumed', val: '∞', unit: 'Cups' },
];

const AboutStats = () => {
  return (
    <section className="bg-[#0a0a0a] py-24 px-8 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-4">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center md:items-start group"
            >
              {/* The Number */}
              <div className="relative">
                <span className="text-6xl md:text-8xl font-black text-transparent stroke-text group-hover:text-[#FF8A50] transition-colors duration-500 font-bebas">
                  {stat.val}
                </span>
                {/* CSS Outline Effect */}
                <style jsx>{`
                  .stroke-text {
                    -webkit-text-stroke: 1px rgba(255, 138, 80, 0.3);
                  }
                  .group:hover .stroke-text {
                    -webkit-text-stroke: 1px #FF8A50;
                  }
                `}</style>
              </div>

              {/* The Label */}
              <div className="mt-4 text-center md:text-left">
                <h4 className="text-[#FF8A50] font-mono text-xs uppercase tracking-[0.3em] font-bold">
                  {stat.label}
                </h4>
                <p className="text-gray-600 text-[10px] uppercase mt-1 tracking-widest">
                  // {stat.unit}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default AboutStats;