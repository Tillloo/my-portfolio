import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Star, Calendar } from 'lucide-react';
import { PERSONAL_INFO } from '../../data';
import AnimatedCounter from '../ui/AnimatedCounter';

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-sky-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-slate-300 leading-relaxed"
          >
            <p>
              I am currently pursuing a Bachelor's degree in Computer Science, focusing on Software Engineering and Cloud Computing. My journey in tech started when I built my first web app in high school, and since then, I've been obsessed with turning ideas into reality through code.
            </p>
            <p>
              Beyond the classroom, I actively participate in hackathons, contribute to open-source, and experiment with emerging technologies like AI and Web3.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { label: "Location", value: PERSONAL_INFO.location, icon: <MapPin size={18} /> },
                { label: "Education", value: "B.S. Computer Science", icon: <GraduationCap size={18} /> },
                { label: "Interests", value: "AI, Web, Cloud", icon: <Star size={18} /> },
                { label: "Availability", value: "Summer 2026", icon: <Calendar size={18} /> }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-slate-900/50 border border-slate-800">
                  <div className="text-sky-400 mt-0.5">{item.icon}</div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium mb-1">{item.label}</div>
                    <div className="text-sm text-slate-200 font-medium">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { count: 15, label: "Projects Completed", suffix: "+" },
              { count: 12, label: "Technologies Mastered", suffix: "" },
              { count: 3, label: "Years Coding", suffix: "+" },
              { count: 1, label: "Internships", suffix: "" }
            ].map((stat, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50 flex flex-col items-center justify-center text-center group hover:border-sky-500/50 transition-colors">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400 mb-2">
                  <AnimatedCounter end={stat.count} suffix={stat.suffix} />
                </div>
                <div className="text-sm font-medium text-slate-400 group-hover:text-slate-300 transition-colors">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}