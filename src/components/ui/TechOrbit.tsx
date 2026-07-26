import { Globe, Code2, Database, Cpu, Terminal } from 'lucide-react';

export default function TechOrbit() {
  return (
    <div className="relative w-80 h-80 flex items-center justify-center scale-75 md:scale-100">
      {/* Center Avatar */}
      <div className="absolute z-10 w-24 h-24 rounded-full border-2 border-sky-400 overflow-hidden bg-slate-800 flex items-center justify-center p-1">
        <div className="w-full h-full rounded-full bg-gradient-to-br from-sky-400 to-indigo-500 flex items-center justify-center text-white font-bold text-2xl shadow-[0_0_15px_rgba(56,189,248,0.5)]">
          SD
        </div>
      </div>

      {/* Orbit Rings & Icons */}
      <div className="absolute inset-0">
        {/* Ring 1 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-slate-700/50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 animate-[spin_10s_linear_infinite]">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-slate-900 border border-slate-700 rounded-full flex items-center justify-center text-sky-400 animate-[spin_10s_linear_infinite_reverse]">
            <Globe size={16} />
          </div>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-slate-900 border border-slate-700 rounded-full flex items-center justify-center text-amber-400 animate-[spin_10s_linear_infinite_reverse]">
            <Code2 size={16} />
          </div>
        </div>

        {/* Ring 2 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full border border-slate-700/50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 animate-[spin_15s_linear_infinite_reverse]">
          <div className="absolute top-1/2 -left-5 -translate-y-1/2 w-10 h-10 bg-slate-900 border border-slate-700 rounded-full flex items-center justify-center text-blue-500 animate-[spin_15s_linear_infinite]">
            <Database size={20} />
          </div>
          <div className="absolute top-1/2 -right-5 -translate-y-1/2 w-10 h-10 bg-slate-900 border border-slate-700 rounded-full flex items-center justify-center text-indigo-400 animate-[spin_15s_linear_infinite]">
            <Cpu size={20} />
          </div>
          <div className="absolute -bottom-2 right-10 w-8 h-8 bg-slate-900 border border-slate-700 rounded-full flex items-center justify-center text-green-400 animate-[spin_15s_linear_infinite]">
            <Terminal size={16} />
          </div>
        </div>
      </div>
    </div>
  );
}