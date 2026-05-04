import { Instagram, Facebook, Linkedin, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="pt-32 pb-12 bg-navy text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-10">
                <span className="font-serif text-2xl tracking-widest uppercase">
                  ACTIVO <span className="text-luxury-gold">MÁS</span>
                </span>
            </div>
            <p className="text-white/40 text-xs leading-relaxed mb-10 uppercase tracking-widest">
              Liderazgo absoluto en gestión de activos inmobiliarios y estrategia patrimonial en Sudamérica.
            </p>
            <div className="flex gap-6">
              <a href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-luxury-gold transition-all hover:border-luxury-gold">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-luxury-gold transition-all hover:border-luxury-gold">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-luxury-gold transition-all hover:border-luxury-gold">
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-10 uppercase text-[10px] tracking-[0.4em] text-luxury-gold">Ecosistema</h4>
            <ul className="space-y-4 text-white/50 text-xs font-bold uppercase tracking-widest">
              <li><a href="#" className="hover:text-white transition-colors">Portafolio Elevado</a></li>
              <li><a href="#proyectos" className="hover:text-white transition-colors">Exclusividades</a></li>
              <li><a href="#proceso" className="hover:text-white transition-colors">Estrategia</a></li>
              <li><a href="#testimonios" className="hover:text-white transition-colors">Legacy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-10 uppercase text-[10px] tracking-[0.4em] text-luxury-gold">Legal & Privacidad</h4>
            <ul className="space-y-4 text-white/50 text-xs font-bold uppercase tracking-widest">
              <li><a href="#" className="hover:text-white transition-colors">Protección de Datos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Compliance</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sesiones FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-10 uppercase text-[10px] tracking-[0.4em] text-luxury-gold">Concierge</h4>
            <ul className="space-y-4 text-white/50 text-xs font-bold uppercase tracking-widest">
              <li>Santiago, Chile. <br />Isidora Goyenechea 3356.</li>
              <li className="text-white">+562 2929 5052</li>
              <li>desk@activomas.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-white/20 uppercase tracking-[0.2em] font-black">
          <p>© 2026 Activo Más Inversiones · Elite Performance Real Estate</p>
          <div className="flex gap-8">
            <span>Santiago</span>
            <span>Melbourne</span>
            <span>Madrid</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
