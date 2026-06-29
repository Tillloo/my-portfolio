import { motion } from 'framer-motion';
import { Briefcase, CheckCircle2 } from 'lucide-react';
import { EXPERIENCE } from '../../data';

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">Experience</h2>
          <div className="w-20 h-1 bg-sky-500 mx-auto rounded-full" />
        </motion.div>

        <div className="relative border-l border-slate-700 ml-4 md:ml-0 md:pl-0">
          {EXPERIENCE.map((exp, idx) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="mb-12 relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-5 items-start relative group">
                {/* Timeline Dot */}
                <div className="absolute -left-[41px] md:left-[19.5%] md:-translate-x-1/2 mt-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-sky-400 z-10 group-hover:bg-sky-400 transition-colors" />
                
                {/* Dates (Desktop Left side) */}
                <div className="hidden md:block col-span-1 text-right pr-12 text-sm text-slate-400 font-medium pt-1">
                  {exp.dates}
                </div>

                {/* Content */}
                <div className="md:col-span-4 p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50 hover:bg-slate-800/50 hover:border-slate-600 transition-colors md:ml-12">
                  <div className="md:hidden text-sm text-sky-400 font-medium mb-2">{exp.dates}</div>
                  <h3 className="text-xl font-bold text-slate-100">{exp.position}</h3>
                  <div className="flex items-center gap-2 text-slate-400 mt-1 mb-4">
                    <Briefcase size={16} />
                    <span>{exp.company}</span>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed">
                        <CheckCircle2 size={16} className="text-sky-500 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1 text-xs font-medium rounded-full bg-slate-900/80 text-slate-300 border border-slate-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}