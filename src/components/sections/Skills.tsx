import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const showcaseTech = [
  // Languages
  { name: 'Java', image: '/images/Logos/Java_Logo.png' },
  { name: 'Python', image: '/images/Logos/Python_Logo.svg' },
  { name: 'C', image: '/images/Logos/C_Logo.png' },
  { name: 'C++', image: '/images/Logos/C++_Logo.webp' },
  { name: 'JavaScript', image: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
  { name: 'TypeScript', image: 'https://cdn.simpleicons.org/typescript/3178C6' },

  // Frontend
  { name: 'React', image: 'https://cdn.simpleicons.org/react/61DAFB' },
  { name: 'Tailwind CSS', image: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
  { name: 'HTML5', image: 'https://cdn.simpleicons.org/html5/E34C2A' },
  { name: 'CSS3', image: '/images/Logos/CSS3_Logo.webp' },

  // Backend
  { name: 'Node.js', image: 'https://cdn.simpleicons.org/nodedotjs/68A063' },
  { name: 'Express.js', image: 'https://cdn.simpleicons.org/express/666666' },
  { name: 'FastAPI', image: 'https://cdn.simpleicons.org/fastapi/009999' },

  // Databases
  { name: 'PostgreSQL', image: 'https://cdn.simpleicons.org/postgresql/68A063' },
  { name: 'MySQL', image: 'https://cdn.simpleicons.org/mysql/4479A1' },
  { name: 'MongoDB', image: 'https://cdn.simpleicons.org/mongodb/47A248' },
  { name: 'SQL', image: 'https://cdn.simpleicons.org/postgresql/F59E0B' },
  { name: 'Apache Spark', image: 'https://cdn.simpleicons.org/apachespark/E25A1C' },

  // Tools
  { name: 'Docker', image: 'https://cdn.simpleicons.org/docker/2496ED' },
  { name: 'Git', image: 'https://cdn.simpleicons.org/git/F05032' },
  { name: 'Google Cloud', image: 'https://cdn.simpleicons.org/googlecloud/4285F4' },
  { name: 'Jupyter Notebook', image: 'https://cdn.simpleicons.org/jupyter/F37626' },
];

const rows = [
  showcaseTech.slice(0, 6),
  showcaseTech.slice(6, 13),
  showcaseTech.slice(13, 18),
  showcaseTech.slice(18, 22),
];

export default function Skills() {
  const [activeTech, setActiveTech] = useState<string | null>(null);
  const [spinningTech, setSpinningTech] = useState<string | null>(null);

  return (
    <section id="skills" className="py-24 relative bg-slate-900/150">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
            Tech Stack
          </h2>

          <div className="w-20 h-1 bg-sky-500 mx-auto rounded-full mb-10" />
        </motion.div>


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-6xl rounded-3xl border border-slate-700/80 bg-slate-900/60 p-8 shadow-[0_8px_30px_rgba(2,6,23,0.35)]"
        >

          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`flex flex-wrap justify-center gap-3 sm:gap-4 ${
                rowIndex === 1 ? 'md:pl-10' : ''
              } ${
                rowIndex === 2 ? 'md:pl-20' : ''
              }`}
            >

              {row.map((tech) => {
                const isActive = activeTech === tech.name;
                const isSpinning = spinningTech === tech.name;

                return (
                  <motion.div
                    key={tech.name}
                    onClick={() => {
                      setActiveTech(isActive ? null : tech.name);

                      setSpinningTech(tech.name);

                      setTimeout(() => {
                        setSpinningTech(null);
                      }, 600);
                    }}
                    whileTap={{ scale: 0.9 }}
                    animate={{
                      scale: isActive ? 1.15 : 1,
                    }}
                    className="group relative w-32 sm:w-32 p-2 cursor-pointer"
                  >

                    {/* Glow */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{
                            opacity: 0,
                            scale: 0.5
                          }}
                          animate={{
                            opacity: 1,
                            scale: 1
                          }}
                          exit={{
                            opacity: 0,
                            scale: 0.5
                          }}
                          className="absolute inset-0 rounded-2xl bg-sky-500/30 blur-xl"
                        />
                      )}
                    </AnimatePresence>


                    <motion.img
                      src={tech.image}
                      alt={tech.name}
                      className="relative h-20 w-full object-contain"
                      animate={{
                        rotate: isSpinning ? 360 : 0
                      }}
                      transition={{
                        duration: 0.6,
                        ease: "easeInOut"
                      }}
                    />


                    <p
                      className={`mt-2 text-center text-md font-semibold transition-colors ${
                        isActive
                          ? 'text-sky-400'
                          : 'text-slate-300 group-hover:text-slate-100'
                      }`}
                    >
                      {tech.name}
                    </p>

                  </motion.div>
                );
              })}

            </div>
          ))}

        </motion.div>

      </div>
    </section>
  );
}