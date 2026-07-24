import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SKILLS_DATA } from '../../data';

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState("All");
  const categories = ["All", ...Object.keys(SKILLS_DATA)];

  const getFilteredSkills = () => {
    if (activeFilter === "All") {
      const allSkills = Object.values(SKILLS_DATA).flat();
      return Array.from(new Map(allSkills.map(item => [item.name, item])).values());
    }
    return SKILLS_DATA[activeFilter as keyof typeof SKILLS_DATA] || [];
  };

  const displayedSkills = getFilteredSkills();

  return (
    <section id="skills" className="py-24 relative bg-slate-900/20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">Tech Stack</h2>
          <div className="w-20 h-1 bg-sky-500 mx-auto rounded-full mb-10" />
          
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === category 
                    ? 'bg-sky-500 text-slate-950 shadow-[0_0_20px_rgba(56,189,248,0.4)] scale-105' 
                    : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 max-w-6xl mx-auto">
          <AnimatePresence mode="popLayout">
            {displayedSkills.map((skill) => (
              <motion.div
                layout
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="group relative flex items-center gap-2.5 px-3 py-2.5 bg-slate-800/30 border border-slate-700/50 rounded-lg cursor-pointer hover:-translate-y-0.5 hover:border-sky-500/50 hover:bg-slate-800/80 hover:shadow-[0_4px_15px_rgba(56,189,248,0.1)] transition-all duration-300"
              >
                <div className="text-slate-400 group-hover:text-sky-400 transition-colors duration-300 shrink-0">
                  {skill.icon}
                </div>
                <span className="text-sm font-medium text-slate-300 group-hover:text-slate-100 transition-colors truncate">
                  {skill.name}
                </span>

                {/* Hover Tooltip */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 -translate-y-full w-48 p-2.5 bg-slate-800 border border-slate-700 shadow-xl text-xs text-slate-300 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-20 text-center pointer-events-none leading-relaxed">
                  {skill.desc}
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-800 border-b border-r border-slate-700 rotate-45"></div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}