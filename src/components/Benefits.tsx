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
    <section className="py-24 bg-dark overflow-hidden relative">
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gold/5 blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-5xl font-display font-bold mb-4">Cuando inviertes en propiedades, no solo compras ladrillos.</h2>
          <p className="text-white/50 text-lg">Aseguras 6 pilares fundamentales para tu tranquilidad y futuro.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="bg-charcoal/40 p-10 rounded-[2.5rem] border border-white/5 hover:border-gold/30 transition-all flex flex-col items-start"
            >
              <div className="mb-8 p-4 bg-white/5 rounded-2xl">
                {pillar.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{pillar.title}</h3>
              <p className="text-white/60 leading-relaxed">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
