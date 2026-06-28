import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import About from './components/sections/About';
import Skills from './components/sections/Skills';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col text-slate-200 font-sans">
      <Header />

      <main>
          <About />
          <Skills />
        
      </main>

      <Footer />
    </div>
  );
}