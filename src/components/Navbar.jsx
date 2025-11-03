import { useEffect, useState } from 'react';
import { Rocket, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linkClass =
    'px-4 py-2 rounded-full text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 transition-colors';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur-xl bg-black/40 shadow-lg shadow-purple-500/10' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2 text-white">
            <div className="p-2 rounded-xl bg-gradient-to-br from-fuchsia-500 via-purple-500 to-indigo-500 shadow-lg shadow-purple-500/30">
              <Rocket size={18} />
            </div>
            <span className="font-semibold tracking-wide">NeoPortfolio</span>
          </a>

          <nav className="hidden md:flex items-center gap-2">
            <a href="#about" className={linkClass}>About</a>
            <a href="#projects" className={linkClass}>Projects</a>
            <a href="#contact" className={linkClass}>Contact</a>
            <a
              href="#contact"
              className="ml-2 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black font-semibold shadow-lg hover:shadow-purple-500/30 hover:-translate-y-0.5 transition-all"
            >
              Let’s Talk
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg hover:bg-white/10"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle Menu"
          >
            {open ? <X className="text-white" /> : <Menu className="text-white" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/80 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-2">
            <a href="#about" className={linkClass} onClick={() => setOpen(false)}>About</a>
            <a href="#projects" className={linkClass} onClick={() => setOpen(false)}>Projects</a>
            <a href="#contact" className={linkClass} onClick={() => setOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}
