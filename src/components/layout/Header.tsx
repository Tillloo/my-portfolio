const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
];

export default function Header() {
  return (
    <header className="bg-slate-950 py-6 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold text-white flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-400 to-indigo-500 flex items-center justify-center text-sm">
            SD
          </div>
          <span>Sandeep.dev</span>
        </a>

        <nav className="flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-400"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#"
            className="px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium border border-white/5"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}