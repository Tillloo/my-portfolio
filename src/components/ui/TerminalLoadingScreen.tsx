import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function TerminalLoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [started, setStarted] = useState(false);
  const [text, setText] = useState("");
  const [lines, setLines] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);

  // Wait for user input before starting
  useEffect(() => {
    const startLoading = () => {
      setStarted(true);

      window.removeEventListener("click", startLoading);
      window.removeEventListener("keydown", startLoading);
    };

    window.addEventListener("click", startLoading);
    window.addEventListener("keydown", startLoading);

    return () => {
      window.removeEventListener("click", startLoading);
      window.removeEventListener("keydown", startLoading);
    };
  }, []);

  // Terminal animation
  useEffect(() => {
    if (!started) return;

    const command = "> npm run portfolio";

    const sequence = [
      "Initializing portfolio...",
      "Loading experience...",
      "Loading projects...",
      "Loading tech stack...",
      "Optimizing performance...",
      "Launching portfolio..."
    ];

    let timeoutIds: ReturnType<typeof setTimeout>[] = [];
    let intervalId: ReturnType<typeof setInterval> | null = null;

    let currentText = "";

    command.split("").forEach((char, index) => {
      const id = setTimeout(() => {
        currentText += char;
        setText(currentText);
      }, index * 50);

      timeoutIds.push(id);
    });

    sequence.forEach((line, index) => {
      const id = setTimeout(() => {
        setLines(prev => [...prev, line]);
      }, 1500 + (index * 500));

      timeoutIds.push(id);
    });

    const readyId = setTimeout(() => {
      setIsReady(true);

      let p = 0;

      intervalId = setInterval(() => {
        p += 8;
        setProgress(Math.min(p, 100));

        if (p >= 100 && intervalId) {
          clearInterval(intervalId);
        }
      }, 60);

    }, 4500);

    timeoutIds.push(readyId);

    const completeId = setTimeout(() => {
      onComplete();
    }, 5300);

    timeoutIds.push(completeId);

    return () => {
      timeoutIds.forEach(clearTimeout);

      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [started, onComplete]);


  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -40, scale: 0.98 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[100] bg-slate-950 flex items-center justify-center p-6"
    >
      <div className="w-full max-w-2xl bg-[#0d1117] rounded-xl border border-slate-800 shadow-[0_0_50px_rgba(56,189,248,0.1)] overflow-hidden font-mono text-sm">

        <div className="px-4 py-3 border-b border-slate-800 flex items-center gap-2 bg-[#161b22]">
          <div className="w-3 h-3 rounded-full bg-rose-500" />
          <div className="w-3 h-3 rounded-full bg-amber-500" />
          <div className="w-3 h-3 rounded-full bg-emerald-500" />
          <div className="ml-4 text-slate-400 text-xs flex-1 text-center pr-12 font-medium">
            bash - user@portfolio
          </div>
        </div>

        <div className="p-6 text-slate-300 min-h-[320px] flex flex-col relative">

          {!started && (
            <div className="text-slate-400 animate-pulse">
              Press any key to initialize...
            </div>
          )}

          {started && (
            <>
              <div className="text-sky-400 mb-3 text-base">
                {text}
                {!isReady && (
                  <span className="animate-pulse inline-block w-2.5 h-4 bg-sky-400 ml-1.5 align-middle -mt-1" />
                )}
              </div>

              <div className="space-y-2 flex-1">
                {lines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.1 }}
                  >
                    <span className="text-slate-600 mr-3">
                      [{(i * 0.12 + 0.5).toFixed(3)}s]
                    </span>

                    <span className="text-slate-300">
                      {line}
                    </span>
                  </motion.div>
                ))}

                {isReady && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-6 text-emerald-400 flex items-center gap-2 font-semibold"
                  >
                    <span>✓ Ready.</span>
                  </motion.div>
                )}
              </div>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-slate-800">
                <div
                  className="h-full bg-sky-500 shadow-[0_0_10px_rgba(56,189,248,0.8)] transition-all duration-75 ease-linear"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </>
          )}

        </div>
      </div>
    </motion.div>
  );
}