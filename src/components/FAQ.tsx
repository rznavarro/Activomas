import { motion } from 'motion/react';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "¿Cuánto necesito ganar para invertir?",
      a: "Recomendamos una renta líquida desde $1.200.000 para poder acceder a créditos hipotecarios. Si ganas menos, puedes complementar renta con tu pareja o familiar."
    },
    {
      q: "¿Tengo que tener el pie completo desde el inicio?",
      a: "No. Tenemos convenios donde puedes pagar el pie hasta en 60 cuotas, permitiéndote empezar hoy sin grandes ahorros iniciales."
    },
    {
      q: "¿Qué pasa si no me aprueban el crédito hipotecario?",
      a: "Contamos con un equipo especializado en gestión bancaria que maximiza tus probabilidades de aprobación negociando directamente con ejecutivos de convenio."
    },
    {
      q: "¿Quién administra la propiedad después?",
      a: "Trabajamos con partners de administración líderes que se encargan de todo: búsqueda de arrendatario, cobranza y mantención. Tú solo recibes el arriendo."
    },
    {
      q: "¿Es seguro invertir en propiedades en Chile hoy?",
      a: "Los activos inmobiliarios son refugios históricos ante la inflación. Chile mantiene un déficit habitacional enorme, lo que asegura demanda y plusvalía a largo plazo."
    },
    {
      q: "¿Cuánto tiempo toma todo el proceso?",
      a: "Desde el diagnóstico inicial hasta la reserva puede tomar 7 días. Luego, dependiendo de si el proyecto está listo o en verde, la entrega varía de meses a un par de años."
    }
  ];

  return (
    <section className="py-24 bg-dark">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-display font-bold mb-4">Preguntas frecuentes</h2>
          <p className="text-white/50 text-lg">Resolvemos tus dudas antes de que las tengas.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`bg-charcoal/50 rounded-2xl border transition-all ${openIdx === idx ? 'border-gold/30' : 'border-white/5'}`}
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full p-6 text-left flex justify-between items-center group"
              >
                <span className={`font-bold text-lg ${openIdx === idx ? 'text-gold' : 'text-white'}`}>{faq.q}</span>
                <ChevronDown className={`transition-transform ${openIdx === idx ? 'rotate-180 text-gold' : 'text-white/30 group-hover:text-white'}`} />
              </button>
              {openIdx === idx && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  className="px-6 pb-6 text-white/60 leading-relaxed"
                >
                  {faq.a}
                </motion.div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
            <button className="text-gold font-bold underline underline-offset-8 decoration-gold/30 hover:decoration-gold transition-all">
                ¿Tienes otra pregunta? Conversemos en persona
            </button>
        </div>
      </div>
    </section>
  );
}
