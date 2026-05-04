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
    <section id="proceso" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h4 className="text-luxury-gold font-bold text-[10px] uppercase tracking-[0.4em] mb-4">El Camino al Éxito</h4>
          <h2 className="text-3xl lg:text-5xl font-serif font-bold text-navy mb-6">Acompañarle es Nuestro Compromiso</h2>
          <p className="text-navy/70 text-base italic font-serif">Del análisis patrimonial a la renta mensual garantizada.</p>
        </div>

        <div className="relative mb-24">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-[52px] left-0 w-full h-px bg-stone" />
          
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
                <div className="w-28 h-28 bg-white border border-stone/50 rounded-full flex items-center justify-center mb-10 mx-auto lg:mx-0 shadow-sm relative group hover:border-luxury-gold transition-all duration-500">
                  <div className="absolute -top-1 -right-1 w-10 h-10 bg-navy text-white rounded-full flex items-center justify-center font-serif italic text-lg shadow-lg">
                    {step.num}
                  </div>
                  <div className="text-luxury-gold scale-125">
                    {step.icon}
                  </div>
                </div>
                <div className="text-center lg:text-left px-4 lg:px-0">
                  <h3 className="text-2xl font-serif font-bold mb-4">{step.title}</h3>
                  <p className="text-navy/60 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="btn-primary mx-auto text-xl px-12"
          >
            INICIAR DIAGNÓSTICO PATRIMONIAL
          </motion.button>
        </div>
      </div>
    </section>
  );
}
