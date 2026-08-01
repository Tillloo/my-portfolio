import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import ContactModal from '../ui/ContactModal';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { PERSONAL_INFO, ROLES } from '../../data';
import ParticleBackground from '../ui/ParticleBackground';
import TechOrbit from '../ui/TechOrbit';

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <ParticleBackground />
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 w-fit">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm font-medium text-slate-300">Available for Summer 2026 Internships</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-slate-100 tracking-tight">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-500">
              {PERSONAL_INFO.name}
            </span>
          </h1>
          
          <div className="h-8 md:h-12 overflow-hidden relative">
            <AnimatePresence mode="wait">
              <motion.h2
                key={currentRoleIndex}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-3xl text-slate-400 font-medium absolute"
              >
                {ROLES[currentRoleIndex]}
              </motion.h2>
            </AnimatePresence>
          </div>

          <p className="text-slate-400 max-w-lg leading-relaxed text-lg">
            I'm a passionate Computer Science student dedicated to building scalable software and exploring the frontiers of Artificial Intelligence.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-4">
            <a href="#projects" className="px-8 py-3 rounded-full bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold transition-all hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] hover:-translate-y-1">
              View Projects
            </a>
            <button
              type="button"
              onClick={() => setIsContactOpen(true)}
              className="px-8 py-3 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-100 font-medium border border-slate-700 transition-all hover:-translate-y-1"
              style={{ cursor: 'pointer' }}
            >
              Contact Me
            </button>
            <div className="flex items-center gap-3 ml-2">
              <a href={PERSONAL_INFO.github} className="p-3 rounded-full bg-slate-800/50 text-slate-300 hover:text-white hover:bg-slate-700 transition-all">
                <FiGithub size={20} />
              </a>
              <a href={PERSONAL_INFO.linkedin} className="p-3 rounded-full bg-slate-800/50 text-slate-300 hover:text-white hover:bg-slate-700 transition-all">
                <FiLinkedin size={20} />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:flex justify-center items-center"
        >
          <TechOrbit />
        </motion.div>
      </div>

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
      >
        <span className="text-sm">Scroll to explore</span>
        <ChevronDown className="animate-bounce" size={20} />
      </motion.div>
    </section>
  );
}