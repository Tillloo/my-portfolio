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
            <p className="space-y-6 text-slate-100 text-lg leading-relaxed text-justify">
                I am currently finishing my Bachelor's degree in Computer Science at Simon Fraser University. 
                My interest in technology started as a kid from taking apart old computers, video game consoles, and phones 
                to understand how they worked. Since then, I have built projects using Python, C++, and modern 
                web technologies, and completed a co-op as a Junior Application Developer at SFU where I helped 
                develop automation solutions to improve workflows.
            </p>
            <p className="space-y-6 text-slate-100 text-lg leading-relaxed text-justify">
                Outside of the classroom, I enjoy participating in hackathons and exploring new technologies. 
                When I am not coding, you can usually find me hiking, working out, playing video games, or 
                watching superhero shows and movies. I am a big fan of Invincible and enjoy anything involving 
                creative storytelling and world-building.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { label: "Location", value: PERSONAL_INFO.location, icon: <MapPin size={18} /> },
                { label: "Education", value: "B.S. Computer Science", icon: <GraduationCap size={18} /> },
                { label: "Interests", value: "AI, Web, Cloud", icon: <Star size={18} /> },
                { label: "Graduation", value: "Spring 2027", icon: <Calendar size={18} /> }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-slate-900/80 border border-slate-700/80">
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
            className="flex flex-col gap-4"
          >
            <div className="overflow-hidden rounded-3xl border border-slate-700/80 bg-gradient-to-br from-slate-900/90 to-slate-800/90 p-3 shadow-2xl shadow-slate-950/30">
            <div className="h-80 rounded-[1.5rem] overflow-hidden border border-slate-700/70 relative">
              <img
                src="/images/image.jpg"
                alt="Profile"
                className="h-full w-full object-cover"
              />

              {/* Image Caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent px-5 py-4">
                <div className="flex justify-between items-end text-sm">
                  <div className="flex items-center gap-2 text-slate-200">
                    <MapPin size={20} className="text-sky-400" />
                    <span className="text-base font-bold">Eagle Bluffs, BC</span>
                  </div>

                  <div className="flex items-center gap-2 text-slate-200">
                    <Calendar size={20} className="text-sky-400" />
                    <span className="text-base font-bold">June 2026</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { count: 15, label: "Projects Completed", suffix: "+" },
                { count: 12, label: "Technologies Mastered", suffix: "" },
                // { count: 3, label: "Years Coding", suffix: "+" },
                // { count: 1, label: "Internships", suffix: "" }
              ].map((stat, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 border border-slate-700/80 flex flex-col items-center justify-center text-center group hover:border-sky-500/50 transition-colors">
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400 mb-2">
                    <AnimatedCounter end={stat.count} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm font-medium text-slate-400 group-hover:text-slate-300 transition-colors">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}