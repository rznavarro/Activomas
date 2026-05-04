import { Instagram, Facebook, Linkedin, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="pt-24 pb-12 bg-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-8">
              <div className="w-10 h-10 gold-gradient rounded-full flex items-center justify-center font-bold text-dark text-xl">A</div>
                <span className="font-display font-bold text-xl tracking-tight">
                  ACTIVO <span className="text-gold">MÁS</span>
                </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-8">
              Líderes en asesoría inmobiliaria y educación financiera en Chile. Trabajamos para que tu patrimonio crezca de forma segura y rentable.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-gold transition-all text-white hover:text-dark">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-gold transition-all text-white hover:text-dark">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-gold transition-all text-white hover:text-dark">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-gold transition-all text-white hover:text-dark">
                 <MessageCircle size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-8 uppercase text-xs tracking-widest text-white/30">Menú Principal</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li><a href="#" className="hover:text-gold transition-colors">Inicio</a></li>
              <li><a href="#proyectos" className="hover:text-gold transition-colors">Proyectos</a></li>
              <li><a href="#proceso" className="hover:text-gold transition-colors">Cómo Invertir</a></li>
              <li><a href="#testimonios" className="hover:text-gold transition-colors">Testimonios</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Blog Financiero</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-8 uppercase text-xs tracking-widest text-white/30">Privacidad</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li><a href="#" className="hover:text-gold transition-colors">Políticas de Privacidad</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Términos y Condiciones</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Preguntas Frecuentes</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Trabaja con nosotros</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-8 uppercase text-xs tracking-widest text-white/30">Contacto</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li>Isidora Goyenechea 3356, Of 61. <br />Las Condes, Santiago.</li>
              <li>Metro El Golf.</li>
              <li className="font-bold text-white">+562 2929 5052</li>
              <li>contacto@activomas.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 text-center text-xs text-white/30">
          <p>© 2025 Activo Más Inversiones · Todos los derechos reservados · Santiago, Chile.</p>
        </div>
      </div>
    </footer>
  );
}
