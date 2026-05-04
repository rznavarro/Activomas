import { motion } from 'motion/react';
import { Briefcase, Heart, ShieldX, Wallet, ArrowRight } from 'lucide-react';

export default function TargetAudience() {
  const profiles = [
    {
      title: "Profesional Estable",
      text: "Trabajas en relación de dependencia y quieres que tu capital genere rendimientos pasivos",
      icon: <Briefcase className="text-luxury-gold" size={32} />
    },
    {
      title: "Legado Familiar",
      text: "Eres padre/madre y buscas construir un patrimonio tangible para las próximas generaciones",
      icon: <Heart className="text-luxury-gold" size={32} />
    },
    {
      title: "Previsión Jubilación",
      text: "Deseas asegurar un flujo de caja mensual independiente de los sistemas tradicionales",
      icon: <ShieldX className="text-luxury-gold" size={32} />
    },
    {
      title: "Optimización Ahorro",
      text: "Cuentas con liquidez y buscas activos reales que protejan tu valor frente a la inflación",
      icon: <Wallet className="text-luxury-gold" size={32} />
    }
  ];

  return (
    <section className="py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h4 className="text-luxury-gold font-bold text-xs uppercase tracking-[0.4em] mb-4">Perfil de Inversión</h4>
          <h2 className="text-4xl lg:text-6xl font-serif font-bold text-navy mb-8">
            ¿Es ésta su oportunidad?
          </h2>
          <p className="text-navy/80 text-lg mb-20 max-w-2xl mx-auto italic font-serif leading-relaxed">
            "La inversión inmobiliaria no es solo para millonarios, es para quienes deciden construir su libertad hoy."
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {profiles.map((profile, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="editorial-card p-10 rounded-[2rem] text-left hover:border-luxury-gold/50 cursor-pointer"
            >
              <div className="w-16 h-16 bg-navy/5 rounded-2xl flex items-center justify-center mb-8">
                {profile.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold text-navy mb-4">{profile.title}</h3>
              <p className="text-navy/80 leading-relaxed text-sm">
                {profile.text}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="text-navy font-bold flex items-center mx-auto hover:text-luxury-gold transition-colors group uppercase tracking-widest text-xs border-b border-navy/20 pb-2"
        >
          DESCUBRA SI CALIFICA PARA EL PLAN MAESTRO
          <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </div>
    </section>
  );
}
