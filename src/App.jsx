import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-fuchsia-500/40 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        {/* About section intentionally merged into hero narrative for flow; showcased work and contact below */}
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
