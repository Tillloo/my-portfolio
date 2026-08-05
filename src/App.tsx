import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TerminalLoadingScreen from './components/ui/TerminalLoadingScreen';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Project';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('portfolioVisited');
    if (hasVisited) {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const attemptPlayback = async () => {
      try {
        await video.play();
      } catch (error) {
        console.warn('Background video autoplay was blocked:', error);
      }
    };

    if (video.readyState >= 2) {
      attemptPlayback();
    } else {
      video.addEventListener('canplay', attemptPlayback, { once: true });
    }

    return () => {
      video.removeEventListener('canplay', attemptPlayback);
    };
  }, []);

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false);
    sessionStorage.setItem('portfolioVisited', 'true');
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden text-slate-200 selection:bg-sky-500/30 selection:text-sky-200 font-sans">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        webkit-playsinline="true"
        className="fixed inset-0 h-full w-full object-cover z-0"
        aria-hidden="true"
      >
        <source src="/images/Background.mp4" type="video/mp4" />
      </video>
      <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_top,rgba(15,23,42,0.2),transparent_65%)]" />
      
      {/* Mouse Gradient Effect */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(56, 189, 248, 0.03), transparent 80%)`
        }}
      />

      <AnimatePresence>
        {isLoading && <TerminalLoadingScreen onComplete={handleLoadingComplete} />}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Header />
          
          <main>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
          </main>

          <Footer />
        </motion.div>
      )}
    </div>
  );
}