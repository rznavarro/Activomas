import { motion } from 'motion/react';
import { Briefcase, Heart, ShieldX, Wallet, ArrowRight } from 'lucide-react';

export default function TargetAudience() {
  const profiles = [
    {
      title: "Profesional Estable",
      text: "Trabajas en relación de dependencia y quieres que tu dinero trabaje para ti",
      icon: <Briefcase className="text-gold" size={32} />
    },
    {
      title: "Legado Familiar",
      text: "Eres padre/madre y quieres dejar patrimonio real a tu familia",
      icon: <Heart className="text-gold" size={32} />
    },
    {
      title: "Previsión Futura",
      text: "No confías en la AFP y quieres asegurar tu propia jubilación",
      icon: <ShieldX className="text-gold" size={32} />
    },
    {
      title: "Ahorro Inteligente",
      text: "Tienes ahorros parados y quieres que generen renta mensual",
      icon: <Wallet className="text-gold" size={32} />
    }
  ];

  return (
    <section className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-5xl font-display font-bold mb-4">
            ¿Eres tú el próximo inversionista?
          </h2>
          <p className="text-white/50 text-lg mb-16">
            No necesitas ser rico. Solo necesitas tomar la decisión correcta hoy.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {profiles.map((profile, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="glass-card p-8 rounded-3xl text-left hover:border-gold/30 transition-all group"
            >
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors">
                {profile.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{profile.title}</h3>
              <p className="text-white/60 leading-relaxed text-sm">
                "{profile.text}"
              </p>
            </motion.div>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="text-gold font-bold flex items-center mx-auto hover:text-white transition-colors group"
        >
          ¿No estás seguro si calificas? Hablemos
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </div>
    </section>
  );
}
