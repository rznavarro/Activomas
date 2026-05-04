import { motion } from 'motion/react';

export default function MediaStrip() {
  const logos = [
    "CNN Chile", "La Tercera", "TVN", "Mega", "Forbes", 
    "El Mercurio", "Bio Bio", "Diario Financiero", "ADN", "Emol"
  ];

  return (
    <section className="py-12 bg-charcoal/50 border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">Referentes en medios nacionales</span>
      </div>
      <div className="flex flex-nowrap overflow-hidden group">
        <motion.div 
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="flex flex-nowrap shrink-0 items-center gap-16 py-4"
        >
          {[...logos, ...logos].map((logo, idx) => (
            <span key={idx} className="text-xl lg:text-3xl font-display font-black text-white/10 uppercase italic shrink-0 tracking-tighter">
              {logo}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
