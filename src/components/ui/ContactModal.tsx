import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, X } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { PERSONAL_INFO } from "../../data";

type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ContactModal({
  isOpen,
  onClose,
}: ContactModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-sm px-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 20, opacity: 0, scale: 0.96 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="w-full max-w-md rounded-2xl border border-slate-700 bg-slate-900/95 p-6 shadow-2xl shadow-slate-950/50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
                  Contact
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-slate-100">
                  Let's connect
                </h3>
              </div>

              <button
                onClick={onClose}
                className="rounded-full p-2 text-slate-400 transition-colors hover:bg-slate-800 hover:text-white"
              >
                <X size={18} />
              </button>
            </div>

            <div className="mt-6 space-y-4 text-sm text-slate-300">
              <a
                href={`mailto:${PERSONAL_INFO.email}`} target="_self"
                className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-800/50 p-3 transition-colors hover:border-sky-500/50 hover:bg-slate-800"
              >
                <Mail size={16} className="text-sky-400" />
                <span>{PERSONAL_INFO.email}</span>
              </a>

              <div className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-800/50 p-3">
                <MapPin size={16} className="text-sky-400" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/60 px-4 py-2 text-sm text-slate-200 transition-colors hover:border-sky-500/50 hover:text-white"
              >
                <FiGithub size={16} />
                GitHub
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/60 px-4 py-2 text-sm text-slate-200 transition-colors hover:border-sky-500/50 hover:text-white"
              >
                <FiLinkedin size={16} />
                LinkedIn
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}