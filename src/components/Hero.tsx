import { motion } from 'motion/react';
import { ArrowRight, Users, TrendingUp, Building2, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-dark">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-gold/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl lg:text-6xl font-display font-bold leading-tight mb-6">
            En la vida te enseñaron a trabajar. <br />
            <span className="text-gold-gradient">Nosotros te enseñamos a invertir.</span>
          </h1>
          <p className="text-lg lg:text-xl text-white/70 mb-10 leading-relaxed max-w-xl">
            Más de 3.000 inversionistas ya aseguran su jubilación, patrimonio y libertad financiera con departamentos de inversión. Sin tener que ser millonario.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto gold-gradient text-dark px-8 py-4 rounded-xl font-bold text-lg shadow-lg flex items-center justify-center group"
            >
              Agenda tu asesoría gratuita — es gratis
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors flex items-center justify-center"
            >
              Ver proyectos disponibles
            </motion.button>
          </div>

          {/* Credibility Micro-data */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-white/50">
            <div className="flex items-center gap-2">
              <Users className="text-gold w-4 h-4" />
              <span>+3.000 inversionistas</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="text-gold w-4 h-4" />
              <span>+UF 10 millones vendidas</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="text-gold w-4 h-4" />
              <span>+40 proyectos activos</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-video lg:aspect-square rounded-3xl overflow-hidden shadow-2xl relative group cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1073" 
              alt="Inversión inmobiliaria moderna" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-dark/40 flex items-center justify-center">
              <div className="w-20 h-20 bg-gold/90 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                <Play className="text-dark w-8 h-8 fill-dark ml-1" />
              </div>
            </div>
          </div>
          
          {/* Floating Element */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 bg-charcoal p-4 rounded-2xl border border-white/10 shadow-2xl hidden md:block"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-emerald/20 flex items-center justify-center rounded-xl">
                 <TrendingUp className="text-emerald" />
              </div>
              <div>
                <p className="text-xs text-white/50">Plusvalía estimada</p>
                <p className="text-lg font-bold text-emerald">+8.4% anual</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
