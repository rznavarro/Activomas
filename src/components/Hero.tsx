import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="hero" className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden">
      {/* Editorial Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury Real Estate Mediterranean" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/40 to-transparent lg:from-white/90 lg:via-white/30 lg:to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full mt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-navy font-serif italic text-base lg:text-lg mb-4">
              Aprovecha la oportunidad:
            </h2>
            <h1 className="text-navy font-serif font-bold text-xl lg:text-3xl leading-tight mb-6 tracking-tight">
              En la vida te <br />enseñaron a <br />trabajar. <br />
              <span className="text-luxury-gold italic">Nosotros te enseñamos a invertir.</span>
            </h1>
            <p className="text-navy font-bold text-[10px] lg:text-xs max-w-md mb-8 uppercase tracking-[0.2em] leading-relaxed opacity-80">
              Más de 3.000 inversionistas ya aseguran su jubilación, patrimonio y libertad financiera.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6 mb-20">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary w-full sm:w-auto text-lg px-12 py-5 shadow-2xl"
              >
                OBTÉN MÁS INFORMACIÓN
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(26, 43, 76, 0.05)' }}
                whileTap={{ scale: 0.95 }}
                className="btn-outline w-full sm:w-auto text-lg px-12 py-5 border-navy !rounded-full"
              >
                VER PROYECTOS
              </motion.button>
            </div>

            <div className="flex flex-wrap items-center gap-12 border-t border-navy/10 pt-10">
               <div className="flex flex-col">
                 <span className="text-luxury-gold font-bold text-3xl font-serif">UF 10M+</span>
                 <span className="text-navy/60 text-[10px] font-black uppercase tracking-[0.2em]">Cerradas</span>
               </div>
               <div className="flex flex-col">
                 <span className="text-luxury-gold font-bold text-3xl font-serif">+3.000</span>
                 <span className="text-navy/60 text-[10px] font-black uppercase tracking-[0.2em]">Inversionistas</span>
               </div>
               <div className="flex flex-col">
                 <span className="text-luxury-gold font-bold text-3xl font-serif">40+</span>
                 <span className="text-navy/60 text-[10px] font-black uppercase tracking-[0.2em]">Exclusividades</span>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 right-10 hidden lg:flex items-center gap-4 rotate-90 origin-right translate-y-full">
         <span className="text-[10px] font-black tracking-[0.4em] text-navy/40 uppercase">Explora el plan maestro</span>
         <div className="w-16 h-px bg-navy/20" />
      </div>
    </section>
  );
}
