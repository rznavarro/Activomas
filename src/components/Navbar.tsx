import { motion } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Cómo invertir', href: '#proceso' },
    { name: 'Testimonios', href: '#testimonios' },
    { name: 'Blog', href: '#' },
  ];

  return (
    <nav 
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark/90 backdrop-blur-md py-3 shadow-xl border-b border-white/5' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 gold-gradient rounded-full flex items-center justify-center font-bold text-dark text-xl">A</div>
          <span className="font-display font-bold text-xl tracking-tight">
            ACTIVO <span className="text-gold">MÁS</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-white/70 hover:text-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="gold-gradient text-dark px-6 py-2.5 rounded-lg font-bold text-sm flex items-center group"
          >
            Agenda tu asesoría gratuita
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-dark border-b border-white/10 absolute top-full left-0 right-0 p-6 flex flex-col space-y-6"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-lg font-medium text-white"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button className="gold-gradient text-dark w-full py-4 rounded-lg font-bold">
            Agenda tu asesoría gratuita
          </button>
        </motion.div>
      )}
    </nav>
  );
}
