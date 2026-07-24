import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ExternalLink, X } from 'lucide-react';
import { PROJECTS } from '../../data';

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);

  const categories = ["All", ...Array.from(new Set(PROJECTS.map(p => p.category)))];

  const filteredProjects = PROJECTS.filter(p => {
    const matchesCategory = filter === "All" || p.category === filter;
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase()) || 
                          p.tech.some(t => t.toLowerCase().includes(search.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedProject]);

  return (
    <section id="projects" className="py-24 relative bg-slate-900/20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-sky-500 mx-auto rounded-full mb-8" />
        </motion.div>

        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          <div className="flex flex-wrap justify-center md:justify-start gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat 
                    ? 'bg-sky-500/10 text-sky-400 border border-sky-500/50' 
                    : 'bg-slate-800/50 text-slate-400 border border-slate-700 hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
            <input 
              type="text" 
              placeholder="Search projects or tech..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-slate-900/50 border border-slate-700 rounded-full py-2 pl-10 pr-4 text-sm text-slate-200 focus:outline-none focus:border-sky-500 transition-colors placeholder-slate-500"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group flex flex-col bg-slate-800/30 border border-slate-700/50 rounded-2xl overflow-hidden hover:-translate-y-2 transition-all hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-slate-900/80 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500" />
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-slate-900/80 text-sky-400 border border-sky-900/50 backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-sky-400 transition-colors">{project.title}</h3>
                  <p className="text-sm text-slate-400 mb-6 flex-1">{project.shortDesc}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.slice(0,3).map(t => (
                      <span key={t} className="text-xs font-medium text-slate-300">#{t}</span>
                    ))}
                    {project.tech.length > 3 && <span className="text-xs font-medium text-slate-500">+{project.tech.length - 3}</span>}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-700/50 mt-auto">
                    <span className="text-sm text-sky-400 font-medium">View Details &rarr;</span>
                    <div className="flex gap-3 text-slate-400">
                      <div className="hover:text-white transition-colors"><ExternalLink size={18} /></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-400">No projects found matching your criteria.</p>
          </div>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          >
            <div 
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" 
              onClick={() => setSelectedProject(null)} 
            />
            
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl z-10 custom-scrollbar"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-slate-800 rounded-full text-slate-400 hover:text-white hover:bg-slate-700 transition-colors z-20"
              >
                <X size={20} />
              </button>

              <div className="h-64 sm:h-80 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10" />
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
              </div>

              <div className="p-6 sm:p-8 -mt-20 relative z-20">
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20 mb-4 inline-block backdrop-blur-md">
                  {selectedProject.category}
                </span>
                <h2 className="text-3xl font-bold text-white mb-4">{selectedProject.title}</h2>
                
                <p className="text-slate-300 leading-relaxed mb-8">
                  {selectedProject.longDesc}
                </p>

                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-slate-100 uppercase tracking-wider mb-4">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map(t => (
                      <span key={t} className="px-3 py-1.5 text-sm font-medium rounded-lg bg-slate-800 text-slate-300 border border-slate-700">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-6 border-t border-slate-800">
                  <a href={selectedProject.demo} className="flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold transition-all">
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                  <a href={selectedProject.github} className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 font-medium border border-slate-700 transition-all">
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}