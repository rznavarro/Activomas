import { motion } from 'motion/react';
import { Menu, X, ArrowRight, Globe } from 'lucide-react';
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
    { name: 'VILLAS', href: '#proyectos' },
    { name: 'PLAN MAESTRO', href: '#proceso' },
    { name: 'ESTILO DE VIDA', href: '#testimonios' },
    { name: 'SOBRE NOSOTROS', href: '#' },
  ];

  return (
    <nav 
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white py-3 shadow-md border-b border-stone' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <span className={`font-serif text-2xl tracking-widest uppercase ${scrolled ? 'text-navy' : 'text-white md:text-navy'}`}>
            ACTIVO <span className={scrolled ? 'text-luxury-gold' : 'text-white md:text-luxury-gold'}>MÁS</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-10">
          <div className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-xs font-bold tracking-[0.2em] transition-colors ${scrolled ? 'text-navy/70 hover:text-navy' : 'text-white/80 hover:text-white md:text-navy/70 md:hover:text-navy'}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-6 border-l border-stone pl-8">
             <div className="flex items-center space-x-1 cursor-pointer group">
               <Globe size={14} className={scrolled ? 'text-navy' : 'text-white md:text-navy'} />
               <span className={`text-[10px] font-bold tracking-widest ${scrolled ? 'text-navy' : 'text-white md:text-navy'}`}>ESPAÑOL</span>
             </div>
             <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-vibrant-green text-white px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest shadow-lg"
            >
              ASISTENCIA
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className={`lg:hidden ${scrolled ? 'text-navy' : 'text-white md:text-navy'}`}
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
          className="lg:hidden bg-white border-b border-stone absolute top-full left-0 right-0 p-8 flex flex-col space-y-6 shadow-2xl"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-bold tracking-widest text-navy"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button className="bg-vibrant-green text-white w-full py-4 rounded-full font-bold uppercase tracking-widest">
            CONTACTAR EXPERTO
          </button>
        </motion.div>
      )}
    </nav>
  );
}
