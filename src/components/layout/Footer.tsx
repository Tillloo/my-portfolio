import React from 'react';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { PERSONAL_INFO } from '../../data';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-slate-800/50 relative bg-slate-950 mt-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-gradient-to-br from-sky-400 to-indigo-500 flex items-center justify-center text-[10px] font-bold text-white">SD</div>
          <span className="font-semibold text-slate-100">{"Sandeep Dhillon"}</span>
        </div>
        
        <p className="text-sm text-slate-500 text-center md:text-left">
          © {new Date().getFullYear()} Built with React, Tailwind & Framer Motion.
        </p>

        <div className="flex items-center gap-4">
          <a href="https://github.com" className="text-slate-400 hover:text-white transition-colors">
            <FaGithub size={20} />
          </a>
          <a href="https://linkedin.com/in/sandeepd5/" className="text-slate-400 hover:text-white transition-colors">
            <FaLinkedin size={20} />
          </a>
          <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-400 hover:text-white transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}