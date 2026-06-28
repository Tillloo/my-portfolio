import { Briefcase } from 'lucide-react';
import { EXPERIENCE } from '../../data/index';

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
            Experience
          </h2>
          <div className="w-20 h-1 bg-sky-500 mx-auto" />
        </div>

        <div className="space-y-8">
          {EXPERIENCE.map((exp) => (
            <div
              key={exp.id}
              className="border border-slate-700 rounded-lg p-6"
            >
              <div className="text-sm text-slate-400 mb-2">
                {exp.dates}
              </div>

              <h3 className="text-xl font-semibold text-slate-100">
                {exp.position}
              </h3>

              <div className="flex items-center gap-2 text-slate-400 mb-4">
                <Briefcase size={16} />
                <span>{exp.company}</span>
              </div>

              <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-sm border border-slate-700 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}