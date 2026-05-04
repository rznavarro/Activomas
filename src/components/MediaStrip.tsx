import { motion } from 'motion/react';

export default function MediaStrip() {
  const logos = [
    "CNN Chile", "La Tercera", "TVN", "Mega", "Forbes", 
    "El Mercurio", "Bio Bio", "Diario Financiero", "ADN", "Emol"
  ];

  return (
    <section className="py-12 bg-stone/10 border-y border-stone/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-navy/30">PRENSA Y REFERENTES NACIONALES</span>
      </div>
      <div className="flex flex-nowrap overflow-hidden group">
        <motion.div 
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          className="flex flex-nowrap shrink-0 items-center gap-16"
        >
          {[...logos, ...logos].map((logo, idx) => (
            <span key={idx} className="text-xl lg:text-4xl font-serif font-bold text-navy/10 uppercase italic shrink-0 tracking-widest px-8">
              {logo}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
