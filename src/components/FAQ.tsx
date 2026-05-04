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
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h4 className="text-luxury-gold font-bold text-[10px] uppercase tracking-[0.4em] mb-4">Resolviendo Inquietudes</h4>
          <h2 className="text-xl lg:text-2xl font-serif font-bold text-navy mb-4">Consultas Frecuentes</h2>
          <p className="text-navy/70 text-sm italic font-serif">Claridad absoluta en su proceso de inversión.</p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`bg-cream rounded-[2rem] border transition-all duration-300 ${openIdx === idx ? 'border-luxury-gold shadow-lg ring-1 ring-luxury-gold/20' : 'border-stone/50 hover:border-stone'}`}
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full p-8 text-left flex justify-between items-center group"
              >
                <span className={`font-serif font-bold text-lg lg:text-xl ${openIdx === idx ? 'text-navy' : 'text-navy/80'}`}>{faq.q}</span>
                <ChevronDown className={`transition-transform duration-500 ${openIdx === idx ? 'rotate-180 text-luxury-gold' : 'text-stone group-hover:text-navy'}`} />
              </button>
              {openIdx === idx && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="px-8 pb-8 text-navy/60 leading-relaxed text-base italic font-serif"
                >
                  "{faq.a}"
                </motion.div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
            <button className="text-navy font-bold uppercase tracking-[0.2em] text-[10px] border-b-2 border-luxury-gold pb-2 hover:text-luxury-gold transition-all">
                ¿TIENE OTRA CONSULTA? SOLICITE UNA SESIÓN PRIVADA
            </button>
        </div>
      </div>
    </section>
  );
}
