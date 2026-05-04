import { motion } from 'motion/react';
import { Search, Presentation, Settings, Home, ArrowRight } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      num: 1,
      title: "Diagnóstico financiero gratuito",
      desc: "Analizamos tu situación actual, capacidad crediticia y tus metas de libertad financiera.",
      icon: <Search className="text-gold" />
    },
    {
      num: 2,
      title: "Te presentamos oportunidades",
      desc: "Seleccionamos los mejores proyectos del mercado que se ajustan 100% a tu perfil de inversionista.",
      icon: <Presentation className="text-gold" />
    },
    {
      num: 3,
      title: "Gestionamos todo contigo",
      desc: "Te acompañamos en contratos, negociación con bancos para el crédito hipotecario y trámites legales.",
      icon: <Settings className="text-gold" />
    },
    {
      num: 4,
      title: "Administración y arriendo",
      desc: "Nuestros partners gestionan la búsqueda de arrendatario y el cuidado de tu propiedad. Tú solo cobras.",
      icon: <Home className="text-gold" />
    }
  ];

  return (
    <section id="proceso" className="py-24 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-5xl font-display font-bold mb-4">Te acompañamos en cada paso</h2>
          <p className="text-white/50 text-lg">Del sueño a la renta mensual, sin fricciones.</p>
        </div>

        <div className="relative mb-20">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-white/10" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative z-10"
              >
                <div className="w-24 h-24 bg-dark border-4 border-charcoal rounded-3xl flex items-center justify-center mb-8 mx-auto lg:mx-0 shadow-xl group hover:border-gold/30 transition-all">
                  <div className="absolute -top-3 -right-3 w-10 h-10 gold-gradient text-dark rounded-xl flex items-center justify-center font-black text-lg">
                    {step.num}
                  </div>
                  {/* Icon size logic */}
                  <div className="scale-125">
                    {step.icon}
                  </div>
                </div>
                <div className="text-center lg:text-left">
                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="gold-gradient text-dark px-10 py-5 rounded-2xl font-black text-xl shadow-2xl flex items-center mx-auto"
          >
            Quiero empezar ahora
            <ArrowRight className="ml-3" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
