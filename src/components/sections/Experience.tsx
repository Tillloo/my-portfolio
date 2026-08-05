import { motion } from 'framer-motion';
import { Briefcase, CheckCircle2 } from 'lucide-react';
import { EXPERIENCE } from '../../data';

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-[68rem] mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">Experience</h2>
          <div className="w-20 h-1 bg-sky-500 mx-auto rounded-full" />
        </motion.div>

        {/* Updated to border-l-2 (2px width) for mobile */}
        <div className="relative border-l-2 border-white md:border-l-0 ml-4 md:ml-0 md:pl-0">
          {/* Desktop Vertical Timeline Bar updated to w-0.5 (2px width) */}
          <div className="hidden md:block absolute left-[16.6%] top-0 bottom-0 w-0.5 bg-white -translate-x-1/2" />

          {EXPERIENCE.map((exp, idx) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="mb-12 relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-6 items-start relative group">
                {/* Timeline Dot slightly enlarged (w-5 h-5) to balance the thicker line */}
                <div className="absolute -left-[41px] md:left-[16.6%] md:-translate-x-1/2 mt-1.5 w-5 h-5 rounded-full bg-slate-900 border-2 border-sky-400 z-10 group-hover:bg-sky-400 transition-colors" />
                
                {/* Dates (Desktop Left side) */}
                <div className="hidden md:flex md:justify-end md:items-start col-span-1 pr-10 lg:pr-12 text-base lg:text-lg text-slate-200 font-semibold pt-1 whitespace-nowrap">
                  {exp.dates}
                </div>

                {/* Content */}
                <div className="md:col-span-5 p-6 rounded-2xl bg-slate-900/80 border border-slate-700/80 hover:bg-slate-900/90 hover:border-slate-600 transition-colors md:ml-8">
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
                      <span key={i} className="px-3 py-1 text-xs font-medium rounded-full bg-slate-900/95 text-slate-300 border border-slate-700">
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