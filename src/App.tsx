import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Project from './components/sections/Project';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col text-slate-200 font-sans">
      <Header />

      <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Project />
      </main>

      <Footer />
    </div>
  );
}