import {SKILLS_DATA} from '../../data/index';

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
            Tech Stack
          </h2>
          <div className="w-20 h-1 bg-sky-500 mx-auto" />
        </div>

        <div className="space-y-10">
          {Object.entries(SKILLS_DATA).map(([category, skills]) => (
            <div key={category}>
              <h3 className="text-xl font-semibold text-slate-200 mb-4">
                {category}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 border border-slate-700 rounded p-3"
                  >
                    <div className="text-slate-400">
                      {skill.icon}
                    </div>

                    <span className="text-sm text-slate-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}