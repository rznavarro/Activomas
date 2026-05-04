import { motion } from 'motion/react';
import { Sun, TrendingUp, AlertCircle, Heart, UserPlus, Lock } from 'lucide-react';

export default function Benefits() {
  const pillars = [
    {
      title: "Jubilación Asegurada",
      desc: "Deja de depender de la AFP. Tú decides cuándo y cómo será tu retiro con rentas fijas.",
      icon: <Sun className="text-gold" size={32} />
    },
    {
      title: "Plusvalía Real",
      desc: "Históricamente, las propiedades en polos de desarrollo casi doblan su valor cada 10-15 años.",
      icon: <TrendingUp className="text-gold" size={32} />
    },
    {
      title: "Activo de Emergencia",
      desc: "Un respaldo tangible y líquido cuando la vida te sorprende con imprevistos.",
      icon: <AlertCircle className="text-gold" size={32} />
    },
    {
      title: "Libertad Financiera",
      desc: "Tu propiedad se paga sola. Generas un flujo de caja mensual sin trabajar de más.",
      icon: <UserPlus className="text-gold" size={32} />
    },
    {
      title: "Herencia Protegida",
      desc: "Un patrimonio sólido que asegura el futuro de tu familia si algo te sucede.",
      icon: <Heart className="text-gold" size={32} />
    },
    {
      title: "Escudo Inflacionario",
      desc: "Compras y arriendas en UF. Tu capital está blindado contra la pérdida de valor del peso.",
      icon: <Lock className="text-gold" size={32} />
    }
  ];

  return (
    <section className="py-32 bg-stone/20 overflow-hidden relative">
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-luxury-gold/5 blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <h4 className="text-vibrant-green font-bold text-xs uppercase tracking-[0.4em] mb-4">Valor Tangible</h4>
          <h2 className="text-4xl lg:text-6xl font-serif font-bold text-navy mb-8 leading-tight">La Inversión Inmobiliaria: <br />Ladrillos que Construyen Libertad</h2>
          <p className="text-navy/60 text-lg italic font-serif">Seis pilares fundamentales para blindar su futuro y su legado.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="editorial-card p-12 rounded-[3.5rem] border border-stone/50 hover:border-luxury-gold/50 transition-all flex flex-col items-start"
            >
              <div className="mb-10 p-6 bg-cream rounded-[2rem] shadow-sm text-luxury-gold">
                {pillar.icon}
              </div>
              <h3 className="text-3xl font-serif font-bold text-navy mb-6">{pillar.title}</h3>
              <p className="text-navy/60 leading-relaxed text-lg">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
