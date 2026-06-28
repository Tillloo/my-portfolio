import React from 'react';
import { MapPin, GraduationCap, Star, Calendar } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-sky-500 mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-slate-300 leading-relaxed">
            <p>
              sample text
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                {
                  label: "Location",
                  value: "Vancouver, Canada",
                  icon: <MapPin size={18} />,
                },
                {
                  label: "Education",
                  value: "B.S. Computer Science",
                  icon: <GraduationCap size={18} />,
                },
                {
                  label: "Interests",
                  value: "AI, Web, Cloud",
                  icon: <Star size={18} />,
                },
                {
                  label: "Availability",
                  value: "Summer 2026",
                  icon: <Calendar size={18} />,
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 border border-slate-700 rounded"
                >
                  <div className="text-sky-400">{item.icon}</div>

                  <div>
                    <div className="text-xs text-slate-500">{item.label}</div>
                    <div className="text-sm text-slate-200">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { count: "15+", label: "Projects Completed" },
              { count: "12", label: "Technologies Mastered" },
              { count: "3+", label: "Years Coding" },
              { count: "1", label: "Internships" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="p-6 border border-slate-700 rounded text-center"
              >
                <div className="text-4xl font-bold text-slate-100 mb-2">
                  {stat.count}
                </div>
                <div className="text-sm text-slate-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}