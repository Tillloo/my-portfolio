import {  ChevronDown } from "lucide-react";
import { PERSONAL_INFO } from "../../data";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 bg-slate-950"
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center w-full">
        <div className="flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-slate-700 w-fit">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-sm font-medium text-slate-300">
              Available for Summer 2026 Internships
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-slate-100">
            Hi, I'm <br />
            <span className="text-sky-400">{PERSONAL_INFO.name}</span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-slate-400">
            Computer Science Student
          </h2>

          <p className="text-slate-400 max-w-lg leading-relaxed text-lg">
            I'm a passionate Computer Science student dedicated to building
            scalable software and exploring the frontiers of Artificial
            Intelligence.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-4">
            <a
              href="#projects"
              className="px-8 py-3 rounded-full bg-sky-500 text-slate-950 font-semibold hover:bg-sky-400"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-8 py-3 rounded-full bg-slate-800 text-slate-100 border border-slate-700 hover:bg-slate-700"
            >
              Contact Me
            </a>

            <div className="flex items-center gap-3">

            </div>
          </div>
        </div>

        <div className="hidden lg:flex justify-center items-center">
          <div className="w-64 h-64 rounded-full bg-slate-800 border-2 border-sky-500 flex items-center justify-center">
            <span className="text-5xl font-bold text-sky-400">
              {PERSONAL_INFO.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-slate-500">
        <span className="text-sm">Scroll to explore</span>
        <ChevronDown size={20} />
      </div>
    </section>
  );
}